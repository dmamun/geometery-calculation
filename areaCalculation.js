function calculateTriangleArea(){
    // height calculation

     const triangleHeight=document.getElementById("triangle-height");
     const triangleHeightText=triangleHeight.value;
     const triangleHeightNumber=parseFloat(triangleHeightText);
     triangleHeight.value='';
    
     

    // //base calculation

    const triangleBase=document.getElementById("triangle-base");
    const triangleBaseText=triangleBase.value;
    const triangleBaseTextNumber=parseFloat(triangleBaseText);
    triangleBase.value='';

    area=0.5*triangleHeightNumber*triangleBaseTextNumber;

    const areaField=document.getElementById("triangle-area");
    areaField.innerText=area;
   
}

function firstInput(inputId){
    const field=document.getElementById(inputId);
    const fieldValueText=field.value;
    const fieldValue=parseFloat(fieldValueText);
    field.value='';
    return fieldValue;
}
function setCalculation(elementId,areaValue){
    const element=document.getElementById(elementId);
    element.innerText=areaValue;

}


function calculateRectangleArea(){
   const rectangleHeight=firstInput("rectangle-height");
   const rectangleBase=firstInput("rectangle-base");
   const totalArea=rectangleHeight*rectangleBase;
   setCalculation("rectangle-area",totalArea);


}

function calculateRombosArea(){
    const rombosHeight=firstInput("rombos-height");
    const rombosBase=firstInput("rombos-base");
    const rombosArea=(rombosHeight*rombosBase)/2;
    setCalculation("rombos-area",rombosArea);
}

