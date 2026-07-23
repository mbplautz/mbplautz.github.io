#!/usr/bin/env python3
import argparse
import os
import sys
from pathlib import Path


def parse_args():
    parser = argparse.ArgumentParser(
        description="Generate a hardcoded APlayer playlist object from a directory of MP3 files"
    )
    parser.add_argument("directory", help="Path to the directory containing MP3 files")
    parser.add_argument(
        "--album-name",
        default=None,
        help="Album name to use in the generated playlist (defaults to directory name)",
    )
    parser.add_argument(
        "--cover",
        default=None,
        help="Optional cover image path to assign to each track",
    )
    parser.add_argument(
        "--output",
        default=None,
        help="Optional file path to write the generated JavaScript to",
    )
    parser.add_argument(
        "--recursive",
        action="store_true",
        help="Recursively scan subdirectories for MP3 files",
    )
    return parser.parse_args()


def discover_mp3_files(directory, recursive):
    path = Path(directory).expanduser().resolve()
    if not path.exists():
        raise FileNotFoundError(f"Directory does not exist: {directory}")
    if not path.is_dir():
        raise NotADirectoryError(f"Not a directory: {directory}")

    if recursive:
        matches = [p for p in path.rglob("*.mp3") if p.is_file()]
    else:
        matches = [p for p in path.glob("*.mp3") if p.is_file()]

    return sorted(matches)


def to_js_string(value):
    return value.replace("\\", "\\\\").replace('"', '\\"')


def build_playlist_code(mp3_files, album_name, cover_path):
    album_label = album_name or "Album"
    cover_value = cover_path or ""

    lines = []
    lines.append(f'const albumName = "{to_js_string(album_label)}";')
    if cover_value:
        lines.append(f'const albumCover = "{to_js_string(cover_value)}";')
    lines.append("const albumPlaylist = [")

    for mp3_path in mp3_files:
        track_name = mp3_path.stem
        if cover_value:
            lines.append("  {")
            lines.append(f'    name: "{to_js_string(track_name)}",')
            lines.append(f'    artist: albumName,')
            lines.append(f'    url: "{to_js_string(mp3_path.as_posix())}",')
            lines.append(f'    cover: albumCover,')
            lines.append("  },")
        else:
            lines.append("  {")
            lines.append(f'    name: "{to_js_string(track_name)}",')
            lines.append(f'    artist: albumName,')
            lines.append(f'    url: "{to_js_string(mp3_path.as_posix())}",')
            lines.append("  },")

    if lines[-1].endswith(","):
        lines[-1] = lines[-1].rstrip(",")

    lines.append("];")
    return "\n".join(lines) + "\n"


def main():
    try:
        args = parse_args()
        mp3_files = discover_mp3_files(args.directory, args.recursive)
        if not mp3_files:
            print("No MP3 files found.", file=sys.stderr)
            return 1

        album_name = args.album_name or Path(args.directory).expanduser().resolve().name or "Album"
        code = build_playlist_code(mp3_files, album_name, args.cover)

        if args.output:
            output_path = Path(args.output).expanduser().resolve()
            output_path.write_text(code, encoding="utf-8")
            print(output_path)
        else:
            sys.stdout.write(code)
        return 0
    except Exception as exc:  # pylint: disable=broad-except
        print(str(exc), file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
