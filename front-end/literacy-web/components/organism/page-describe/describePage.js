import styles from './DescribePage.module.css';

export default function DescribePage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>문해력 향상을 위해</h2>
      </div>
      <div className={styles.text}>
        <p>
        아동기는 생애 중 어휘 습득이 가장 왕성한 시기입니다. <br/>
        이때 습득된 어휘는 성인이 되었을 때 원활하게 독서하고 듣고, 자신의 생각이나 의견을 글로 쓰고 말하는 데 사용됩니다. <br/>
        본 서비스는 퀴즈와 나만의 단어장, 나만의 사전과 같은 컨텐츠를 통하여 아동기의 어휘 습득에 도움을 줄 수 있습니다. <br/>
        이러한 어휘 습득은 장기적으로 성인기의 원활한 의사소통 능력에 긍정적인 영향을 미칠 것입니다. <br/>
        </p>
      </div>
    </div>
  )
}