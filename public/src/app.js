


         // make auth and firestore references
        const auth = firebase.auth();
        const db = firebase.firestore();
        const functions = firebase.functions();
    

// Var from signin form
// Log user(s) in
const signInForm = document.querySelector('.signin-form');
// console.log("form", signInForm);

signInForm.addEventListener('submit', (e)=> {

        e.preventDefault();

            const email = signInForm['user-signin-email'].value;
            const password = signInForm['user-signin-password'].value;    
            
            console.log("email", email);
            console.log("password", password);

            // log the user in
                auth.signInWithEmailAndPassword(email, password)
                .then((cred) => {
                        signInForm.reset();
                        console.log("user is logged in");
                })
}); //end of signinform





// Logout button in modal form
const logoutBtn = document.querySelector('.logout-btn');
// console.log(logoutBtn);
logoutBtn.addEventListener('click', (e)=> {

        e.preventDefault();

                auth.signOut();
                console.log("user is logged out");

            
})



auth.onAuthStateChanged(user => {

        if(user) {
               
          db.collection('income').onSnapshot(snapshot => {
                  
                incomeBox(snapshot.docs);
          });

          db.collection('spendinghistory').onSnapshot(snapshot => {
                  
                spendingBox(snapshot.docs);
                spendingHistory(snapshot.docs);
          });
          db.collection('monthlyexpense').onSnapshot(snapshot => {
                  
                listFixedExpenditure(snapshot.docs);
          });
          // if user is logged in 

          const spendingForm = document.querySelector('.spending-form');
              //  console.log(spendingForm);
              spendingForm.addEventListener('submit', (e) => {
                      
                        e.preventDefault();

                        const spendingTitle = spendingForm['title-spending-history-title'].value;
                        const spendingAmount = spendingForm['amount-spending-history-amount'].value;
                        const createdDate = new Date();

                        db.collection('spendinghistory').add({
                                title: spendingTitle,
                                amount: spendingAmount,
                                spendAT: createdDate,
                                status: false
                        });
                       
        }); // End of spendingForm

        }
        else {
                incomeBox([]);
                spendingBox([]);
                spendingHistory([]);
                listFixedExpenditure([]);
        }
});


