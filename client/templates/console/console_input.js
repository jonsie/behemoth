Template.consoleInput.events ({
    "submit .console-input": function (event) {

        var input = event.target.text.value;

        if ((/^'/).test(input)) {
            Messages.insert({
                text: Meteor.user().username + ' says ' + '\"'+input.slice(1)+'\"',
                createdAt: new Date()
            });
        }

        // Clear form
        event.target.text.value = "";

        // Prevent default form submit
        return false;
    }
});
