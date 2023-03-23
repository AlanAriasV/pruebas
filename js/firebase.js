import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue,
    // get,
    // child
} from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";

export class DataBase {
    constructor() {
        this.firebaseConfig = {
            // ...
            // The value of `databaseURL` depends on the location of the database
            databaseURL: "https://test-d7fde-default-rtdb.firebaseio.com/",
            apiKey: "AIzaSyD5WbzSbRGJcY9JZQYro34ZizXBQeC4SbI",
            authDomain: "test-d7fde.firebaseapp.com",
            projectId: "test-d7fde",
            storageBucket: "test-d7fde.appspot.com",
            messagingSenderId: "361425225155",
            appId: "1:361425225155:web:0d9b76f7de534f2a85e976",
            measurementId: "G-PNPWW6V07E"
        };
        this.app = initializeApp(this.firebaseConfig);
        this.database = getDatabase(this.app);
    }

    getAsignatures(career, mesh, semester, action) {

        const asignatures = ref(this.database, `Carreras/${career}/${mesh}/${semester}`);
        onValue(asignatures, (snapshot) => {
            this.data = snapshot.val();
            action();
        });

    }

    getTeacher() {

    }

    getClassroom() {

    }

}
