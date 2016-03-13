import Ember from 'ember';

const { Object } = Ember;

export default Ember.Controller.extend({
    oldCardName: "",
    oldCardDesc: "",
    oldListName: "",
    isShowComments: false,
    activeCard: null,
    actions: {
        addList( model ){
            let listName = prompt("Give a name for the list!");
            if( listName ){
                model.addObject( Object.create({ "name": listName, "cards": [] }));
            }
        },
        deleteList( model, list ){
            model.removeObject( list );
        },
        addCard( cards ){
            let cardName = prompt("Give a name for the card!");
            if( cardName ){
                cards.addObject( Object.create({ "name": cardName, "description": "Click to add description!", "comments": [] }));
            }
        },
        deleteCard( cardsList, selectedCard ){
            cardsList.removeObject( selectedCard );
        },
        enableRename( card ){
            this.set( "oldCardName", card.get("name") );
            card.set("isRename", true);
        },
        saveName( card ){
            if( !card.get("name") ){
                card.set("name", this.get( "oldCardName" ));
            }
            card.set("isRename", false);
        },
        revertName( card ){
            card.set("name", this.get( "oldCardName" ));
            card.set("isRename", false);
        },
        enableListRename( list ){
            this.set( "oldListName", list.get("name") );
            list.set("isRename", true);
        },
        saveListName( list ){
            if( !list.get("name") ){
                list.set("name", this.get( "oldListName" ));
            }
            list.set("isRename", false);
        },

        revertListName( list ){
            list.set("name", this.get( "oldListName" ));
            list.set("isRename", false);
        },
        editDesc( card ){
            this.set( "oldCardDesc", card.get("description") );
            card.set("isEditDesc", true);
        },
        saveDesc( card ){
            if( !card.get("description") ){
                card.set("description", this.get( "oldCardDesc" ));
            }
            card.set("isEditDesc", false);
        },
        revertDesc( card ){
            card.set("description", this.get( "oldCardDesc" ));
            card.set("isEditDesc", false);
        },
        stateChange( cards, selectedCard ){
            cards.setEach("isActive", false);
            selectedCard.set("isActive", true);
            this.set("activeCard", selectedCard);
            this.set("isShowComments", true);
        },
        showHideComments(){
            let self = this;
            Ember.$(".comments-container").animate({ 'width': 'toggle'}, 50, function(){
                $(".container-comments").toggleClass("hide");
            });
        },
        addComment( comments ){
            let newComment = prompt("Please Enter Your Comment!");
            if( newComment ){
                let dateStr = new Date();
                comments.addObject( Object.create({"message": newComment, "time": dateStr.toDateString()}) );
            }
        },
        deleteComment( comments, comment ){
            comments.removeObject( comment );
        }
    }
});
