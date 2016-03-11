import Ember from 'ember';

const { Object } = Ember;

export default Ember.Controller.extend({
    backup: "",
    backupOldDesc: "",
    actions: {
        addList( model ){
            let listName = prompt("Please Enter List name");
            if( listName ){
                model.addObject( Object.create({ "name": listName, "cards": [] }));
            }
        },
        addCard( cards ){
            let cardName = prompt("Please Enter Card name");
            if( cardName ){
                cards.addObject( Object.create({ "name": cardName, "description": "Click to add description!", "comments": [] }));
            }
        },
        saveName( card ){
            if( !card.get("name") ){
                card.set("name", this.get( "backupOldName" ));
            }
            card.set("isRename", false);
        },
        revertName( card ){
            card.set("name", this.get( "backupOldName" ));
            card.set("isRename", false);
        },
        enableRename( card ){
            this.set( "backupOldName", card.get("name") );
            card.set("isRename", true);
        },
        deleteCard( cardsList, selectedCard ){
            cardsList.removeObject( selectedCard );
        },
        saveDesc( card ){
            if( !card.get("description") ){
                card.set("description", this.get( "backupOldDesc" ));
            }
            card.set("isEditDesc", false);
        },
        revertDesc( card ){
            card.set("description", this.get( "backupOldDesc" ));
            card.set("isEditDesc", false);
        },
        editDesc( card ){
            this.set( "backupOldDesc", card.get("description") );
            card.set("isEditDesc", true);
        }
    }
});
