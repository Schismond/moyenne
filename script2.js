let btn = document.getElementById("btn");
btn.addEventListener("click", calculate);

function calculate() {
  //EXAMES

  let anaNum2Exam = +document.querySelector("#anaNum2 .exam").value;
  let analyse4Exam = +document.querySelector("#analyse4 .exam").value;
  let vaapdExam = +document.querySelector("#vaapd .exam").value;
  let addExam = +document.querySelector("#add .exam").value;
  let statExam = +document.querySelector("#stat .exam").value;
  let bddExam = +document.querySelector("#bdd .exam").value;
  let langRExam = +document.querySelector("#langR .exam").value;
  let eng2Exam = +document.querySelector("#eng2 .exam").value;

  //TD

  let anaNum2TD = +document.querySelector("#anaNum2 .TD").value;
  let analyse4TD = +document.querySelector("#analyse4 .TD").value;
  let vaapdTD = +document.querySelector("#vaapd .TD").value;
  let addTD = +document.querySelector("#add .TD").value;
  let statTD = +document.querySelector("#stat .TD").value;
  let bddTD = +document.querySelector("#bdd .TD").value;
  let langRTD = +document.querySelector("#langR .TD").value;

  //TP
  let anaNum2TP = +document.querySelector("#anaNum2 .tp").value;
  let bddTP = +document.querySelector("#bdd .tp").value;
  //MOYENNES
  let anaNum2Moyenne = anaNum2Exam / 2 + anaNum2TD / 4 + anaNum2TP / 4;
  let analyse4Moyenne = (2 * analyse4Exam) / 3 + analyse4TD / 3;
  let vaapdMoyenne = vaapdTD / 3 + (2 * vaapdExam) / 3;
  let addMoyenne = addTD  / 3 + (2 * addExam) / 3;
  let statMoyenne = statTD / 3 + (2 * statExam) / 3;
  let bddMoyenne = bddExam / 2 + bddTD / 4 + bddTP / 4;
  let langRMoyenne = langRTD / 3 + (2 * langRExam) / 3;
  let eng2Moyenne = eng2Exam;

  //Calcules

  let modules = [
    anaNum2Moyenne,
    analyse4Moyenne,
    vaapdMoyenne,
    addMoyenne,
    statMoyenne,
    bddMoyenne,
    langRMoyenne,
    eng2Moyenne,
  ];
  let coeffitions = [3, 2, 2, 2, 3, 3, 2, 1];
  let moyenneTotale = 0;
  for (let i = 0; i < modules.length; i++) {
    moyenneTotale += modules[i] * coeffitions[i];
  }

  let moeynneGenerale = (moyenneTotale / 18).toFixed(2);

  //Affichages
  let affichages = document.getElementsByClassName("moyenne-finale");
  for (let k = 0; k < modules.length; k++) {
    affichages[k].innerText = ("Moyenne = " + modules[k].toFixed(2));
  }

  let mg =document.getElementById('mg');
  mg.innerText = "Votre Moyenne Generale Est : " + moeynneGenerale;

}