import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonAlert, IonButton, IonActionSheet  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Black Clover</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
      <img alt="Silhouette of mountains" src="src/img/profile.PNG" />
      <IonCardHeader>
        <IonCardTitle>Noelle Silva</IonCardTitle>
        <IonCardSubtitle>It's not as if we can win as long as we don't give up.</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent></IonCardContent>


      <IonButton id="present-alert" expand="block">Click Me</IonButton>
      <IonAlert
        trigger="present-alert"
        header="A Short Title Is Best"
        subHeader="A Sub Header Is Optional"
        message="A message should be a short, complete sentence."
        buttons={['Action']}
      ></IonAlert>
<IonButton id="open-action-sheet"expand="block">Open</IonButton>
      <IonActionSheet
        trigger="open-action-sheet"
        header="Actions"
        buttons={[
          {
            text: 'Delete',
            role: 'destructive',
            data: {
              action: 'delete',
            },
          },
          {
            text: 'Share',
            data: {
              action: 'share',
            },
          },
          {
            text: 'Cancel',
            role: 'cancel',
            data: {
              action: 'cancel',
            },
          },
        ]}
      ></IonActionSheet>
    </IonCard>


        
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
