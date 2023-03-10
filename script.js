let btn = document.getElementById("btn");
btn.addEventListener("click", calculate);

function calculate() {
  //EXAMES

  let anaNumExam = +document.querySelector("#anaNum .exam").value;
  let analyseExam = +document.querySelector("#analyse .exam").value;
  let probaExam = +document.querySelector("#proba .exam").value;
  let siExam = +document.querySelector("#si .exam").value;
  let topoExam = +document.querySelector("#topo .exam").value;
  let algExam = +document.querySelector("#alg .exam").value;
  let serieExam = +document.querySelector("#serie .exam").value;
  let engExam = +document.querySelector("#eng .exam").value;

  //TD

  let anaNumTD = +document.querySelector("#anaNum .TD").value;
  let analyseTD = +document.querySelector("#analyse .TD").value;
  let probaTD = +document.querySelector("#proba .TD").value;
  let siTD = +document.querySelector("#si .TD").value;
  let topoTD = +document.querySelector("#topo .TD").value;
  let algTD = +document.querySelector("#alg .TD").value;
  let serieTD = +document.querySelector("#serie .TD").value;

  //TP
  let anaNumTP = +document.querySelector("#anaNum .tp").value;

  //MOYENNES
  let anaNumMoyenne = anaNumExam / 2 + anaNumTD / 4 + anaNumTP / 4;
  let analyseMoyenne = (2 * analyseExam) / 3 + analyseTD / 3;
  let probaMoyenne = probaTD / 3 + (2 * probaExam) / 3;
  let siMoyenne = siTD / 3 + (2 * siExam) / 3;
  let topoMoyenne = topoTD / 3 + (2 * topoExam) / 3;
  let algMoyenne = algTD / 3 + (2 * algExam) / 3;
  let serieMoyenne = serieTD / 3 + (2 * serieExam) / 3;
  let engMoyenne = engExam;

  //Calcules

  let modules = [
    anaNumMoyenne,
    analyseMoyenne,
    probaMoyenne,
    siMoyenne,
    topoMoyenne,
    algMoyenne,
    serieMoyenne,
    engMoyenne,
  ];
  let coeffitions = [3, 3, 2, 2, 2, 2, 2, 1];
  let moyenneTotale = 0;
  for (let i = 0; i < modules.length; i++) {
    moyenneTotale += modules[i] * coeffitions[i];
  }

  let moeynneGenerale = (moyenneTotale / 17).toFixed(2);

  //Affichages
  let affichages = document.getElementsByClassName("moyenne-finale");
  for (let k = 0; k < modules.length; k++) {
    affichages[k].innerText = ("Moyenne = " + modules[k].toFixed(2));
  }

  let mg =document.getElementById('mg');
  mg.innerText = "Votre Moyenne Generale Est : " + moeynneGenerale;

}