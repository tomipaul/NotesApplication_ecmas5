var chai = require('chai');
var expect = chai.expect;
var NotesApplication = require("../NotesApplication");
var Note = new NotesApplication.NotesApplication("Tomi Paul");


describe('NotesApplication', function() {

  it('adds note to notes list and returns list length', function() {
    expect(Note.create('We wish to be there')).to.equal(1);
  });
  
  it('returns note at the indicated index in string', function() {
    expect(Note.get_note(0)).to.equal('We wish to be there');
  });

  it('returns note at the indicated index in string', function() {
    expect(Note.get_note('man')).to.equal('Invalid note id, Enter a valid integer');
  });

  it('returns notes in list in formatted pattern', function() {
    expect(Note.listNotes()).to.equal('Note ID: '+String(0)+'\nWe wish to be there\n\nBy Author Tomi Paul');
  });

  it('deletes and returns array of deleted notes', function() {
    Note.create('Lost but not Forgotten');
    expect(Note.delete_note(1)).to.equal('Lost but not Forgotten');
  });

  it('deletes and returns array of deleted notes', function() {
    Note.create('Lost but not Forgotten');
    expect(Note.delete_note(3.02)).to.equal('Invalid note id, Enter a valid integer');
  });

  it('edits a note and returns new copy', function() {
    expect(Note.edit_note(0, 'We will be there')).to.equal('We will be there');
  });

  it('edits a note and returns new copy', function() {
    expect(Note.edit_note('4', 'We will be there')).to.equal('Invalid note id, Enter a valid integer');
  });

  it('searches note list for notes with search keys', function() {
    expect(Note.search_notesList('be')).to.equal('Note ID: '+String(0)+'\nWe will be there\n\nBy Author Tomi Paul');
  });

  it('searches note list for notes with search keys', function() {
    expect(Note.search_notesList('manner')).to.equal('No results found for manner');
  });
});