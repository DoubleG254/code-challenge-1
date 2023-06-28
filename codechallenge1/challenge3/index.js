document.addEventListener("DOMContentLoaded", () =>{
    let form = document.querySelector("form")
    form.addEventListener("submit",(e) =>{
       e.preventDefault()
       grosssalary(e.target.basicsalary.value, e.target.benefits.value)
       form.rest()
    } )
})
function grosssalary(basicsalary,benefits){
    let Grosssalary = document.querySelector("#Grosssalary");
    let gross = parseInt(basicsalary) + parseInt(benefits);
    Grosssalary.innerHTML= `Gross salary : ${gross}`;
//Calculation and printing  of PAYE taxes depending on the gross salary 
        let PAYE = document.querySelector("#PAYE")   
        let paye ;           
        if (gross<=2400){
            paye= 0.1 * gross
            PAYE.innerHTML=`PAYE : ${paye}`;
        }
        if (gross<=32333 && Grosssalary>2400) {
            paye = 0.25 * gross;
            PAYE.innerHTML=`PAYE : ${paye}`;
        }
        if (gross>32333) {
            paye = 0.3 * gross;
            PAYE.innerHTML=`PAYE : ${paye}`;
        }
        // Calculation and printing of NHIF deductions depending on the gross salary
        let NHIFdeductions = document.querySelector("#NHIFdeductions")  ; 
        let NHIFdeduct;  
        if (gross<=5999) {
            NHIFdeduct= 150;
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=6000 && gross<=7999) {
            NHIFdeduct= 300;
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=8000 && gross<=11999) {
            NHIFdeduct = 400
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=12000 && gross<=14999) {
            NHIFdeduct= 500
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=15000 && gross<=19999) {
            NHIFdeduct=600
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=20000 && gross<=24999) {
            NHIFdeduct= 750
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=25000 && gross<=29999) {
            NHIFdeduct = 850
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=30000 && gross<=34999) {
            NHIFdeduct = 900
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=35000 && gross<=39999) {
            NHIFdeduct = 950
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=40000 && gross<=44999) {
            NHIFdeduct = 1000
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=45000 && gross<=49999) {
            NHIFdeductions = 1100
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=50000 && gross<=59999) {
            NHIFdeduct = 1200
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=60000 && gross<=69999) {
            NHIFdeductions = 1300
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=70000 && gross<=79999) {
            NHIFdeduct = 1400
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(gross>=80000 && gross<=89999) {
            NHIFdeduct = 1500
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        if(Grosssalary>=90000 && Grosssalary<=99999) {
            NHIFdeductions = 1600
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeductions}`;
        }
        if(gross>=100000) {
            NHIFdeduct = 1700
            NHIFdeductions.innerHTML= `NHIFdeductions : ${NHIFdeduct}`;
        }
        //Calculation and printing of NSSF deductions depending on the gross salary with maximum deduction 0f 400
        let NSSFdeductions= document.querySelector("#NSSFdeductions")    
        let NSSFdeduct= 0.5 * gross
        if (NSSFdeduct>400) {
            NSSFdeductions.innerHTML=`NSSFdeductions : 400`;
        } 
        if(NSSFdeduct<=400){
            NSSFdeductions.innerHTML=`NSSF deductions: ${NSSFdeduct}`;
        }
        //Personal and insurance relief and tax reliefs on PAYE tax to reduce the backage of taxes 
        const personalrelief =2400;       
        const insurancerelief=5000;
        let netsalary=document.querySelector("#netsalary")
        let deductions=NHIFdeduct + NSSFdeduct + paye;
        let original=gross + personalrelief + insurancerelief
        let finsalary= original - deductions
        netsalary.innerHTML= `Net salary : ${finsalary}`
    }
    


