ReactiveTabs.createInterface({
    template: 'basicTabs'
});

Template.tabbedInterface.helpers({
    tabs: function () {
        return [
            { name: 'Console', slug: 'console' },
            { name: 'Editor', slug: 'editor' }
        ];
    },
    activeTab: function () {
        // Use this optional helper to reactively set the active tab.
        // All you have to do is return the slug of the tab.

        // You can set this using an Iron Router param if you want--
        // or a Session variable, or any reactive value from anywhere.

        // If you don't provide an active tab, the first one is selected by default.
        // See the `advanced use` section below to learn about dynamic tabs.
        return Session.get('activeTab');
    }
});