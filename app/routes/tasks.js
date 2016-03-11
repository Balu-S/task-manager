import Ember from 'ember';

const { $ } = Ember;

export default Ember.Route.extend({
    model: function(){
        return [
            Ember.Object.create({
                "name": "List 1",
                "cards": [
                    Ember.Object.create({
                        "name": "Card 1",
                        "description": "Description 1",
                        "comments": [
                            {
                                "message": "comment 1"
                            }
                        ]
                    }),
                    Ember.Object.create({
                        "name": "Card 2",
                        "description": "Description 2",
                        "comments": [
                            {
                                "message": "comment 1"
                            }
                        ]
                    })
                ]
            }),
            Ember.Object.create({
                "name": "List 2",
                "cards": [
                    Ember.Object.create({
                        "name": "List Card 1",
                        "description": "Description 1",
                        "comments": [
                            {
                                "message": "comment 1"
                            }
                        ]
                    }),
                    Ember.Object.create({
                        "name": "List Card 2",
                        "description": "Description 2",
                        "comments": [
                            {
                                "message": "comment 1"
                            }
                        ]
                    })
                ]
            })
        ];
    },
    actions: {
        didTransition() {
            Ember.run.later(function(){
                $(".board").delegate("a", "click", function( ){
                    $(".active").removeClass("active");
                    $(this).addClass("active");
                });
            }, 10);
        }
    }

});
