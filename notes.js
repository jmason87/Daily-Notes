const searchTerm = "need to study"

const notes = [
    {
        id: 1,
        subject: "Science",
        date: "10/05/2021",
        feeling: "confident",
        timeSpent: 60,
    },
    {
        id: 2,
        subject: "Math",
        date: "10/5/2021",
        feeling: "need to study",
        timeSpent: 60,
    }
]
console.log(notes)

const noteAboutToday = {
    id: 3,
    subject: "History",
    date: "10/06/2021",
    feeling: "confident",
    timeSpent: 120
}

notes.push(noteAboutToday)

// console.log(notes)

// for (const noteList of notes) {
//     console.log(`Note ${noteList.id}
//     ${noteList.date}
//     I learned ${noteList.subject}
//     I spent ${noteList.timeSpent} minutes working on it
//     I felt ${noteList.feeling}
//     `)
// }

for (const note of notes) {
    if (note.feeling === searchTerm) {
    console.log(note)
    }
}   

const createNote = (newNote) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxID = currentLastNote.id
    const idForNewNote = maxID + 1
    const  dateCreated = 
    newNote.id = idForNewNote
    notes.push(newNote)
}

const geogrpahyNote = {
    subject: "Geography",
        date: "10/06/2021",
        feeling: "weak",
        timeSpent: 60,
}

createNote(geogrpahyNote)



var currentdate = new Date(); 
var datetime = "Last Sync: " + currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

                console.log(currentdate)