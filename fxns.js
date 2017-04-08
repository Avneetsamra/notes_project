var notes, count = 0;

// save the notes into local storage
function saveNotes() {
    var notesArray = [];

    // for each of the notes add a bespoke note object to the array
    document.getElementById("notes").innerHTML = notes.find("li>div").forEach(function (i, e){//notes.find("li > div").each(function (i, e) {
        // save the class attribute of the div, as well as the text for the title and content text areas
        var colourClass =               document.getElementById("e").setAttribute("class"); //$(e).attr("class");
        var title = document.getElementById("e").innerHTML = e.find("textarea.note-title"); //$(e).find("textarea.note-title");
        var content = document.getElementById("e").innerHTML = e.find("textarea.note-content"); //$(e).find("textarea.note-content");

        notesArray.push({ Index: i, Title: title.val(), Content: content.val(), Class: colourClass });
    });

    // json encode it
    var jsonStr = JSON.stringify(notesArray);

    // and save the json string into local storage
    localStorage.setItem("notes", jsonStr);
	setStatus6v('Notes Saved.');

}

// add event handlers to a note
function addNoteEvent(noteElement) {
    var div =  document.noteElement.children("div");																					//noteElement.children("div");
    var closeImg = document.getElementById("div").innerHTML = div.find("img");															//div.find("img");

    document.getElementById("div").focus(function () {
        closeImg.remove("hide");																										//removeClass("hide");
    });

    document.getElementById("div").children().focus(function () {																		//div.children().focus(function () {
        closeImg.remove("hide");																										//Class("hide");
    });

    document.getElementById("div").onhover(function(){																					//div.hover(function () {
        closeImg.remove("hide");																										//Class("hide");
    }, function () {
        closeImg.add("hide");																											//Class("hide");
        saveNotes();
    });


    document.getElementById("div").children().onhover(function () {
        closeImg.remove("hide");																										//Class("hide");
    }, function () {
        closeImg.add("hide");																											//Class("hide");
    });
}
			
//  adds a new note to the 'notes' list
function addNewNote(className, title, content) {
	// if class is not specified, use a random colour class
	if (!className) {
		className = "colour" + Math.ceil(Math.random() * 3);
	}
				
	// add a new note to the end of the lists
	notes.append("<li><div class='" + className + "'>" + 																					//?
					"<textarea class='note-title' placeholder='Add Title' maxlength='20'/>" + 
					"<textarea class='note-content' placeholder='Add Your Contents Here'/>" + 
					"<button class='btn_CloseTd52' title='close'> <img class='hide' src='images/3.png'/> </button>" + 
					"</div></li>");
				
	// get the new note that's just been added and attach the click event handler to its close button
	var newNote = document.getElementById("notes").lastChild.innerHTML.innerHTML = notes.find("li:last");									//notes.find("li:last");
	document.getElementById("newNote").innerHTML = newNote.find("img").click(function () {													//newNote.find("img").click(function () {
        // remove the note and save
	    document.getElementById("newNote").innerHTML = newNote.remove();																	//newNote.remove();
	    saveNotes();
		setStatus6v('Note Deleted.');
	});
				
	// hook up event handlers to show/hide close button as appropriate
	addNoteEvent(newNote);
				
	// if a title is provided then set the title of the new note
	if (title) {
		// get the title textarea element and set its value
		document.getElementById("newNote").innerHTML = newNote.find("textarea.note-title").value(title);									//val(title);//newNote.find("textarea.note-title").val(title);
    }

	// if a content is provided then set the content of the new note
	if (content) {
		// get the content textarea element and set its value
		document.getElementById("newNote").innerHTML = newNote.find("textarea.note-content").value(content);								//.val(content);//newNote.find("textarea.note-content").val(content);
    }

    // save
    saveNotes();
	setStatus6v('Notes Created.');																											//?
}

// load the notes saved in the local storage
function loadNotes() {
    var storedNotes = localStorage.getItem("notes");																						//?
    if (storedNotes) {
        // passes the stored json back into an array of note objects
        var notesArray = JSON.parse(storedNotes);
        count = notesArray.length;

        var i;
        for (i = 0; i < count; i++) {
            var storedNote = notesArray[i];
            addNewNote(storedNote.Class, storedNote.Title, storedNote.Content);
        }
    }
	setStatus6v('Notes Loaded.');
}

function clearStatus6v(){
 
 
   setStatus6v('');//document.getElementById("divStatus").innerHTML = divStatus.html('');//alert('clear status');$('#divStatus').html('');

}
function setStatus6v(str1){
	document.getElementById("divStatus").innerHTML = str1;  //$('#divStatus').html(str1);
	var intV = setTimeout(function(){clearStatus6v();},7000);
}
window.onload=function() {
    //alert('test');
	
  notes= $("#notes");
	loadNotes(); 
       // addNewNote();

	//document.getElementById("btnNew").addEventListener("click", btnNew){
	$("#btnNew").click(function () {//document.getElementById("btnNew").innerHTML = btnNew.click(function () {//
        addNewNote();
    });
	if (count === 0) {
        $("#btnNew").click();//document.getElementById("btnNew").innerHTML = btnNew.click();//
    }
};




























/*window.onload=function () {
//$(document).ready(function () {
//document.addEventListener("onload",Load());
//function Load(){																								//
    // get references to the 'notes' list
	//alert("q");
		notes= $("#notes");																							//    notes = document.getElementById('notes');//

    // load notes from local storage if one's available
    loadNotes();

    // clicking the 'New Note' button adds a new note to the list
    $("#btnNew").click(function () {//document.getElementById("btnNew").innerHTML = btnNew.click(function () {//
        addNewNote();
    });

    // add a note to the list if there aren't any
    if (count === 0) {
        $("#btnNew").click();
    }
});
*/