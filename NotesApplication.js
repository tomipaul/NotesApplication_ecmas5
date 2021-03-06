//this is the exported NotesApplication module

var exports = module.exports;

exports.NotesApplication = function(author) {
 	this.author = author;

 	this.notes = [];

 	this.validate = function(note_id) {
 		return Number.isInteger(note_id);
 	}

	this.create = function(note_content) {
 		return this.notes.push(note_content);
 	}

	this.listNotes = function() {
		var formattedNotes = [];
		for (var itemIndex in this.notes) {
 			var item = this.notes[itemIndex];
 			formattedNote = 'Note ID: '+String(itemIndex)+'\n'+item.toString()+'\n\nBy Author '+ this.author;
			formattedNotes.push(formattedNote);
			return formattedNotes.join('\n');
		}
	}

	this.get_note =function(note_id) {
		if (!this.validate(note_id)) { return 'Invalid note id, Enter a valid integer';}
		return this.notes[note_id].toString();
	}
}

exports.NotesApplication.prototype.search_notesList = function(search_text) {
	var formattedNotes = [];
	for (var itemIndex in this.notes) {
		var item = this.notes[itemIndex];
		if (item.toString().includes(search_text)) {
			formattedNote = 'Note ID: '+String(itemIndex)+'\n'+item.toString()+'\n\nBy Author '+ this.author;
			formattedNotes.push(formattedNote);
			return formattedNotes.join('\n');
			}
		}
	var output = 'No results found for '+search_text;
	return output;
}

exports.NotesApplication.prototype.delete_note = function(note_id) {
	if (!this.validate(note_id)) { return 'Invalid note id, Enter a valid integer'; }
	return this.notes.splice(note_id, 1)[0];
}

exports.NotesApplication.prototype.edit_note = function(note_id, new_content) {
	if (!this.validate(note_id)) { return 'Invalid note id, Enter a valid integer'; }
	return this.notes[note_id] = new_content;
}

