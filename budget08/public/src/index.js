const incomeCard = document.querySelector('.income-card');

const incomeBox = (data) => {

    let sum = 0;
        data.forEach(doc => {
            const n =doc.data().depositDate.seconds;
            let createdDate = new Date(n * 1000);
            console.log(createdDate);

            sum += doc.data().depositAmount;
            const card = `
            
            <div class="header-title" >INCOME (projection)</div>
            <div class="card-body">
                <div id="monthly-sum-amount">$ ${sum}</div>
                <img src="icons/pencil-square.svg" type="button" class="pen-update" data-bs-toggle="collapse" data-bs-target="#income-drop-down" >
                <div class="collapse" id="income-drop-down">
                <div class="card card-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Amount</label>
                      <input type="email" class="form-control" id="total-income-amount">
                    </div>
                    <button type="submit" class="btn btn-primary">Update</button>
                  </form>
                </div>
              </div>
            </div>
            
                                            `;
                                incomeCard.innerHTML = card;
        })
        console.log("sum: ", sum);
}



const spendingCard = document.querySelector('.spending-card');

const spendingBox = (data) => {

    let spendingTotal = 0;

        data.forEach(doc => {

            spendingTotal += parseInt(doc.data().amount);
            const card = ` 
            <div class="header-title">CURRENT MONTHLY SPENDING TOTAL</div>
            <div class="card-body">
                <div id="monthly-sum-amount">$ ${spendingTotal}</div>
            </div>

                                
                                        `;
                        spendingCard.innerHTML = card;
        });
}

const listFixedCard = document.querySelector('.list-fixed-expenditure');

const listFixedExpenditure = (data) => {
            const paidBlack = document.querySelector('#icon-update');
            const paidPng =document.querySelector('#icon-paid');
            let html = '';
            data.forEach(doc => {
                const currentStatus = doc.data().status;
        
                card = `
                    <div class="card cards" >
                       <div class="row body-row">
                       <div class="col-10">
                       <div class="check-month">${doc.data().title}</div>
                            <div class="check-month">July 2, 2021</div>
                        <div class="check-amount">$ ${doc.data().amount}</div>
                    </div>
                    <div class="col-2" data-id=${doc.id}>  
                    ${currentStatus ? `<img src="icons/paid.png" class="paid-icon">` : `<img type="button" class="paid-icons" src="icons/update.svg" id="icon-update" >`}
                    </div>
                    </div>
                    </div>
                            `;                      
                                    
                                    html += card;
                                    
            });
                                    listFixedCard.innerHTML = html;

}


const spendingHistoryList = document.querySelector('.spending-history-list');

const spendingHistory = (data) => {

        let html = '';

            data.forEach(doc => {
                const n =doc.data().spendAT.seconds;
                let createdDate = new Date(n * 1000);
                const card = `
                <div class="card">
                <div class="row ">
                <div class="col-10">
                <div class="spending-title">${doc.data().title}</div>
                <div class="check-month">${createdDate}</div>
                <div class="check-amount">$ ${doc.data().amount}</div>
                </div>
                <div class="col-2">
                    <img src="icons/update.svg" id="icon-updates" data-bs-toggle="modal" data-bs-target="#spendingHistory">
                </div>
                </div>
            </div>
                            
                                    `;
                                   html += card;
            });
                            spendingHistoryList.innerHTML = html;
}

const paycheck = document.querySelector('.projection-paidcheck');

        const paycheckRender = (data) => {
               
                let html = '';
                data.forEach(doc => {

                    const n = doc.data().depositDate.seconds;
                    let createdDate = new Date(n * 1000);
                const card = `
                <div class="card">
                        <div class="check-month">${createdDate}</div>
                        <div class="check-amount">$ ${doc.data().depositAmount}</div>
                </div>
                                        `;
                                        html += card
                });
                                        paycheck.innerHTML = html;
        }
