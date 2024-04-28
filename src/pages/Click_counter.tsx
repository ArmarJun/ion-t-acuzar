// src/ClickCounter.tsx

import React, { useState } from 'react';
import './Click_counter.css'; // Import CSS file
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonButtons, IonBackButton } from '@ionic/react';

const ClickCounter: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const goBack = () => {
    window.location.href = '/';
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            {/* Add any content if needed */}
          </IonButtons>
          <IonTitle>Click Counter</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding container">
        <h1 className="counter">Count: {count}</h1>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <IonButton className="button" onClick={incrementCount}>Click me</IonButton>
  <IonButton className="button" onClick={resetCount}>Reset</IonButton>
</div>
<div style={{ textAlign: 'center', marginTop: '10px' }}>
  <IonButton className="button" onClick={goBack}>Back</IonButton>
</div>

      </IonContent>
    </IonPage>
  );
};

export default ClickCounter;
