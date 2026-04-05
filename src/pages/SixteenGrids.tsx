import styles from "./sixteengrids.module.css";

export default function SixteenGrids() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.page}>
        <div className={styles.titleContainer}>
          <div className={styles.title}>
            <div>
              <h1 className={`japanese ${styles.titleSecondary}`}>
                16のスペース
              </h1>
              <h1 className={styles.titlePrimary}>16 GRIDS</h1>
            </div>
            <h2>Yoyo 26 Mar 2026</h2>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/images/bowlsandplate.png" />
        </div>
      </div>
      <div className={styles.page}>
        <div>
          <p>Fase della cerimonia del te</p>
        </div>
        <div className={`${styles.imgThree} ${styles.alignStart}`}>
          <img className={styles.img} src="/images/utensilview.png" />
          <img className={styles.img} src="/images/sideview.png" />
          <img className={styles.img} src="/images/utensils2.png" />
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.imgCenterContainer}>
          <img className={styles.img} src="/images/letter.png" />
          <p>Aironi pettegoli</p>
          <p>A: 250 L:200 P: 40 mm</p>
        </div>
        <div className={styles.imgCenterContainer}>
          <img className={styles.img} src="/images/lamp.png" />
          <p style={{ visibility: "hidden" }}>a</p>
          <p style={{ visibility: "hidden" }}>a</p>
        </div>
      </div>
      <div className={styles.page}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "50%",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p>
              <i>Yakisugi</i> Scultura 01
            </p>
            <p>A:150 L: 80mm P: 50 mm</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/images/object.png" />
        </div>
      </div>
      <div className={styles.page}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "50%",
          }}
        >
          <div></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <p>
              <i>Yakisugi</i> Scultura 02
            </p>
            <p>A:300 L: 80mm P: 50 mm</p>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.img} src="/images/object2.png" />
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.imgCenterContainer}>
          <img className={styles.img} src="/images/tentlamp.png" />
          <p>A:150 L: 90mm P: 100 mm</p>
        </div>
        <div className={styles.imgCenterContainer}>
          <img className={styles.img} src="/images/tentlamp2.png" />
          <p style={{ visibility: "hidden" }}>a</p>
        </div>
      </div>
      <div className={styles.page}>
        <div className={styles.imgCenterContainer}>
          <img className={styles.img} src="/images/coconut.png" />
        </div>
        <div className={styles.imgCenterContainer}>
          <img className={styles.img} src="/images/coconutopen.png" />
        </div>
      </div>
      <div className={styles.page}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <p>
            La cerimonia del tè giapponese è incentrata su umiltà, attenzione e
            presenza. Tradizionalmente, gli ospiti entrano attraverso una
            piccola apertura (nijiriguchi), lasciando fisicamente fuori l’ego e
            il mondo esterno. Quest’opera reinterpreta tale struttura attraverso
            una griglia di sedici tatami, tinti con Aizome. La griglia crea
            distanza e ritmo, sottolineando l’importanza dello spazio vuoto, uno
            spazio di respiro nella società contemporanea. Radicata nella mia
            pratica di lavorare con materiali trovati, l’opera riflette su
            memoria, residuo e trasformazione. La presenza del memento mori ci
            ricorda l’impermanenza—ogni incontro è breve e irripetibile. Non
            riguarda solo la morte, ma la consapevolezza: un invito silenzioso a
            riflettere su come scegliamo di vivere. Con fiori stagionali e
            un’unica opera d’arte, ogni incontro diventa unico—un momento per
            rallentare, osservare e accorgersi.
          </p>
        </div>
      </div>
    </div>
  );
}
