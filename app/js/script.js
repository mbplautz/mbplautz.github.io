// Global variables
var accountId, monthId;
var currentTransaction = null;
var nodeMap = {};
var navbarApp;
var categoryMainApp;

// Model master object used by all vue instances
var modelMaster = {
    navbar: {
        appName: 'Framework7 Scroll Issue App',
        breadCrumb: '',
        balance: {
            currentBalance: '',
            availableBalance: '',
        }
    }
};

// Utility functions
function fireWindowResize() {
    window.dispatchEvent(new Event('resize'));
}

function gathernodeMap(node) {
	if (isCategory(node)) {
		nodeMap[node.category.id] = node;
		(node.items || []).forEach(gathernodeMap);
	}
	else {
		nodeMap[node.transaction.id] = node;
	}
}

function isCategory(item) {
	return Object.prototype.hasOwnProperty.call(item, 'category');
}

function hasCategories(item) {
	if (Array.isArray(item.items)) {
		return item.items.reduce(function(prev, curr) {
			return prev || isCategory(curr);
		}, false);
	}
	return false;
}

// Vue components
var BalanceItem = Vue.component('balance-item', {
    props: {
		data: {
			type: Object,
			default: function() { return {}; }
		}
    },
    template: 
        '<div class="budget-item">' +
            '<span v-if="data.currentBalance !== \'\'">Current Balance: {{data.currentBalance}}</span>' +
            '<span v-if="data.currentBalance !== \'\' && data.availableBalance !== \'\'"> / </span>' +
            '<span v-if="data.availableBalance !== \'\'">Available Balance: {{data.availableBalance}}</span>' +
        '</div>'
});

var BudgetItem = Vue.component('budget-item', {
	props: {
		data: {
			type: Object,
			default: function() { return {}; }
		}
	},
	render: function(_) {
        var $_ = isCategory(this.data) ? this.data.category : this.data.transaction;
        if (!$_) {
            debugger;
        }
		var e = isCategory(this.data) ? ($_.parent || $_.expand) : false;
		return isCategory(this.data) ?
			_('li', __class('accordion-item' + ($_.parent ? ' accordion-item-opened' : '')), [
				_('a', __({ href: (e ? '#' : '/subcategory5/?id=' + $_.id), class: 'item-link item-content subitem'}), [
					_('div', __class('item-inner'), [
						_('div', __class('item-title-row'), [
							_('div', __class('item-title'), $_.name),
							_('div', __class('item-after ' + __v($_.sum)), $_.sum)
						]),
						_('div', __class('item-subtitle'), $_.limit)
					])
				]),
				(e ? _('div', __class('accordion-item-content'), [
					_('div', __class('block'), [
						_('div', __({ class: 'list media-list' + (hasCategories(this.data) ? '' : ' accordion-list'), id: 'L' + $_.id }), 
							this.data.items.map(item => _(BudgetItem, {
                                props: { data: item },
                                key: isCategory(item) ? item.category.id : item.transaction.id
							}))
						)
					])
				]) : '')
			])
			:
			_('li', __class('accordion-item'), [
				_('a', __({ href: '#', class: 'item-link item-content subitem' }), [
					_('div', __class('item-inner'), [
						_('div', __class('item-title-row'), [
							_('div', __class('item-title'), $_.description),
							_('div', __class('item-after ' + __v($_.amount)), $_.amount)
						]),
						_('div', __class('item-subtitle'), $_.date)
					])
				]),
				_('div', __class('accordion-item-content'), [
					_('div', __class('block'), [
						_('p', 'Description: ' + $_.description),
						Object.prototype.hasOwnProperty.call($_, 'checkNumber') ? _('p', 'Check No: ' + $_.checkNumber) : '',
						_('p', 'Ending Balance: ' + $_.endingBalance)
					])
				])
			]);
	}
});

// App initialization
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Framework7',
    // App id
    id: 'org.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    theme: 'ios',
    // Add default routes
    routes: [
        {
            path: '/about/',
            url: 'about.html',
        }
    ],
    init: false
});

var $$ = Dom7;
function __(obj) { return { attrs: obj }; }
function __class(className) { return { attrs: { class: className } } };
function __v(num) { return (parseFloat(num.replace('$', '')) >= 0 ? 'positive-value' : 'negative-value'); }

app.on('init', function(e) {
    // The resize must be invoked to center the navbar title
    fireWindowResize();
    // Configure some components
    app.panel.disableSwipe('left');

    // Register each individual Vue app
    navbarApp = new Vue({
        el: '#navbar-div',
        data: modelMaster.navbar
    });

    // Perform the initial data request
    // This is a mock response of the initial data
    setTimeout(function() {
        var data = {"data":{"month":{"id":"8d5a994c-8795-4d72-a04d-ddae55722b81","accountId":"c8ca9c2e-0c8a-482d-a692-ac9f5c91c9e0","name":"September","year":2018,"startDate":"2018-09-01T00:00:00.000Z","endDate":"2018-09-30T23:59:59.000Z"},"items":[{"category":{"id":"uncategorized","name":"Uncategorized","order":-1,"expand":true,"sum":"−$1,674.23"},"items":[{"transaction":{"id":"081e96eb-01e3-4dcf-859a-01d6174bc9e4","sequenceNumber":4,"description":"Touchstone Climbing","amount":"−$78.50","date":"9/21/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"64ac6c9b-d74b-4e49-9128-162375c60263","sequenceNumber":8,"description":"SparkFun","amount":"−$89.40","date":"9/19/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"3c6eb366-5cd1-4c69-8371-bdf7dbcd6832","sequenceNumber":10,"description":"United Airlines","amount":"−$500.00","date":"9/8/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"8926f407-2aa9-4884-8964-e051d9686720","sequenceNumber":11,"description":"Uber 072515 SF**POOL**","amount":"−$6.33","date":"9/6/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"8743670a-f65f-427b-95c4-32df6b70c75a","sequenceNumber":12,"description":"Tectra Inc","amount":"−$500.00","date":"9/3/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"83b29564-983b-4e8e-ab09-a54db62342bb","sequenceNumber":15,"description":"Madison Bicycle Shop","amount":"−$500.00","date":"9/2/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}}]},{"category":{"id":"8de1f51e-1ed8-44d7-832e-71284eaaead9","name":"Income","icon":null,"iconColor":null,"limit":null,"order":0,"expand":true,"sum":"$4.22"},"items":[{"transaction":{"id":"6e182e81-61a3-45e2-9883-c84662baf6ad","sequenceNumber":9,"description":"INTRST PYMNT","amount":"$4.22","date":"9/18/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}}]},{"category":{"id":"b064e168-ca7a-4336-b52a-50a687d59dcc","name":"Bills","icon":null,"iconColor":null,"limit":"$8,000.00","order":1,"expand":true,"sum":"−$7,953.50","remaining":"$46.50"},"items":[{"transaction":{"id":"274673fb-dc4d-4bc8-8d3f-5b014caa0e78","sequenceNumber":0,"description":"CREDIT CARD 3333 PAYMENT *//","amount":"−$25.00","date":"9/23/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"8a627d8a-7113-42c2-ace0-9667c6bb4f56","sequenceNumber":2,"description":"ACH Electronic CreditGUSTO PAY 123456","amount":"−$5,850.00","date":"9/22/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"d9cc1940-c854-4d25-8035-38d581fc33b9","sequenceNumber":13,"description":"AUTOMATIC PAYMENT - THANK","amount":"−$2,078.50","date":"9/2/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}}]},{"category":{"id":"33e3d7fc-f99c-474f-81d8-8385ced1a452","name":"Food/Drink","icon":null,"iconColor":null,"limit":null,"order":2,"expand":true,"sum":"−$516.33"},"items":[{"category":{"id":"4c2c232a-dea4-4346-be93-75e7db8f26c5","name":"Food","icon":null,"iconColor":null,"limit":"$300.00","order":0,"expand":true,"path":"September 2018 > Food/Drink > Food","sum":"−$512.00","remaining":"−$212.00"},"items":[{"transaction":{"id":"de69b3df-0ab8-4937-8331-a7e7aa5bf9fe","sequenceNumber":6,"description":"McDonald's","amount":"−$12.00","date":"9/20/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"dc519e0c-b26a-46a7-90c8-92bbaa11e8e4","sequenceNumber":14,"description":"KFC","amount":"−$500.00","date":"9/2/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}}]},{"category":{"id":"2d831ad4-df8d-4844-9aa5-7e30444de00d","name":"Drink","icon":null,"iconColor":null,"limit":"$50.00","order":1,"expand":true,"path":"September 2018 > Food/Drink > Drink","sum":"−$4.33","remaining":"$45.67"},"items":[{"transaction":{"id":"378811c1-85e9-452d-ba33-4587afbef16f","sequenceNumber":7,"description":"Starbucks","amount":"−$4.33","date":"9/20/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}}]}]},{"category":{"id":"a6f8c04b-6416-420e-a370-61ba390e2857","name":"Travel","icon":null,"iconColor":null,"limit":null,"order":3,"expand":true,"sum":"$494.60"},"items":[{"transaction":{"id":"b5792dc8-614d-420b-a3d9-9e6cde288302","sequenceNumber":1,"description":"Uber 063015 SF**POOL**","amount":"−$5.40","date":"9/23/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}},{"transaction":{"id":"6f4f549b-7717-4283-b01f-7449c439b362","sequenceNumber":5,"description":"United Airlines","amount":"$500.00","date":"9/21/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}}]},{"category":{"id":"02e14876-0dab-4c68-9934-bfb66ccd1bfe","name":"Other","icon":null,"iconColor":null,"limit":null,"order":4,"expand":true,"sum":"−$1,000.00"},"items":[{"transaction":{"id":"08a78afb-a0bd-4be2-b7b7-027d2cfaf3eb","sequenceNumber":3,"description":"CD DEPOSIT .INITIAL.","amount":"−$1,000.00","date":"9/22/18","type":null,"comment":null,"endingBalance":"","checkNumber":null}}]}],"account":{"availableBalance":"$100.00","currentBalance":"$110.00","calcBalance":"−$10,645.24"},"prevMonth":null,"nextMonth":null},"status":"success","statusCode":200};
        initialData(data);
    }, 100);
});

app.init();

// App callbacks
function initialData(response) {
    // Hide loader
    $$('#initial-loader-div').addClass('hidden');

    var data = response.data;
    accountId = data.month.accountId;
    monthId = data.month.id;

    modelMaster.navbar.balance = data.account;
    modelMaster.navbar.breadCrumb = `${data.month.name} ${data.month.year}`;

    modelMaster.categoryTree = data.items;

    categoryMainApp = new Vue({
        el: '#category-list-bind',
        data: {
            categoryData: modelMaster.categoryTree
        }
    });

    fireWindowResize();
    setTimeout(fireWindowResize, 500);
}