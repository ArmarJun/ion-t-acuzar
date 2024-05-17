import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonInput, IonItem, IonButtons, IonBackButton, IonLabel } from '@ionic/react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('');

  const clearDisplay = () => {
    setDisplay('');
  };

  const appendToDisplay = (value: string) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot='start'>
        <IonBackButton defaultHref="/ion-t-acuzar/home" />
           </IonButtons>
          <IonTitle>Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
        <IonInput value={display} placeholder="0"readonly={true}className="display"/>
        </IonItem>
        <div className="buttons">
          
          <IonButton onClick={() => appendToDisplay('7')}>7</IonButton>
          <IonButton onClick={() => appendToDisplay('8')}>8</IonButton>
          <IonButton onClick={() => appendToDisplay('9')}>9</IonButton>
          <IonButton onClick={clearDisplay}>C</IonButton>
          
          <IonButton onClick={() => appendToDisplay('4')}>4</IonButton>
          <IonButton onClick={() => appendToDisplay('5')}>5</IonButton>
          <IonButton onClick={() => appendToDisplay('6')}>6</IonButton>
          <IonButton onClick={() => appendToDisplay('/')}>/</IonButton>
         
          <IonButton onClick={() => appendToDisplay('1')}>1</IonButton>
          <IonButton onClick={() => appendToDisplay('2')}>2</IonButton>
          <IonButton onClick={() => appendToDisplay('3')}>3</IonButton>
          <IonButton onClick={() => appendToDisplay('*')}>*</IonButton>
          
          <IonButton onClick={() => appendToDisplay('0')}>0</IonButton>
          <IonButton onClick={() => appendToDisplay('-')}>-</IonButton>
          
          <IonButton onClick={calculate}>=</IonButton>
          <IonButton onClick={() => appendToDisplay('+')}>+</IonButton>
          <IonButton onClick={() => appendToDisplay('.')}>.</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Calculator;