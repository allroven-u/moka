let listElements = document.querySelectorAll('.list__button--click');
const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector("toggle");

listElements.forEach(listElement => {
    listElement.addEventListener('click', ()=>{
        
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if(menu.clientHeight == "0"){
            height=menu.scrollHeight;
        }

        menu.style.height = `${height}px`;

    })
});

function cerrar(){
   
    if(sidebar.classList.contains(navClose)){
        sidebar.classList.remove("navClose");
    sidebar.classList.add("nav");
    }
    else{
        sidebar.classList.remove("nav");
        sidebar.classList.add("navClose");
    }
    
    
}


//MOSTRAR LOS MODALES

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const showModal = document.querySelectorAll('.show-modal');
const titleLogin = document.getElementById('title-login');
const EditAction = document.querySelector('.modal form');
const inputUser = document.getElementById('account');
const inputPassword = document.getElementById('password');


const hiddenModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// start function show modal
function ShowModalFunct() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    location.href = "#body";

    closeModal.addEventListener('click', hiddenModal);
    overlay.addEventListener('click', hiddenModal);
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            hiddenModal();
        }
    });
}
//end function show modal

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function () {


        if (showModal[i].value === 'classic') {
            titleLogin.textContent = 'Classic Site';
            EditAction.setAttribute('action', 'https://engineclassic.backupbet.com/NewLogin.aspx');
            ShowModalFunct();
        } else if (showModal[i].value === 'betslip1') {
            titleLogin.textContent = 'Betslip Site 1';
            EditAction.setAttribute('action', 'https://engineslip.backupbet.com/NewLogin.aspx');
            ShowModalFunct();
        } else if (showModal[i].value === 'betslip2') {
            titleLogin.textContent = 'Beslip Site 2';
            EditAction.setAttribute('action', 'https://engineslip2.backupbet.com/NewLogin.aspx');
            ShowModalFunct();
        } else if (showModal[i].value === 'agents1') {
            titleLogin.textContent = 'Agents Site 1';
            EditAction.setAttribute('action', 'https://agents.backupbet.com/default.aspx');
            ShowModalFunct();
        } else if (showModal[i].value === 'agents2') {
            titleLogin.textContent = 'Agents Site 2';
            EditAction.setAttribute('action', 'https://agentsclassic.backupbet.com/default.aspx');
            ShowModalFunct();
        } else if (showModal[i].value === 'agents3') {
            titleLogin.textContent = 'Agents Site 3';
            EditAction.setAttribute('action', 'https://agents2.backupbet.com/');
            ShowModalFunct();
        } else if (showModal[i].value === 'betglobal') {
            titleLogin.textContent = 'Betglobal Site';
            EditAction.setAttribute('action', 'https://enginebetglobal.backupbet.com/default.aspx');
            ShowModalFunct();
        } else if (showModal[i].value === 'mobile') {
            titleLogin.textContent = 'Mobile Site ';
            EditAction.setAttribute('action', 'https://enginemobile.backupbet.com/login.aspx');
            ShowModalFunct();
        }



    });
}

