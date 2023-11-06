import Styles from "../Styles/Workflow.module.css";
import workflow from "../resources/workflow.png";
const Workflow= () => {
    return (
        <div className={Styles.main}>
            <div className={Styles.sect1}>
                <h1>የአሰራር ሂደት</h1>
                <p>አብሮነት በዘመናዊ በይነ-መረብ በመጠቀም ሰዎች ባሉበት ሆነው በመመዝገብና የአገልግሎቱን ተሳታፊ በመሆን በጋራ ወደተሻለ የኢኮኖሚ ዕድገት የሚዙበት ታላቅ መንገድ ነው፡፡   </p>
                <p>እያንዳንዱ ሰው ለመጀመር 3000( ሦስት ሺ ) ብር ለተረኛው መጣል ይኖረበታል፡፡</p>
                <p>ማንነቱን የሚገልጽ መታወቂያ፤ መንጃ ፈቃድ ወይም ፓስፖርት ኮፒ ከፋይሉ ጋር ማያያዝ ይኖረበታል፡፡</p>
                <p>ኢሜይል አድራሻ፤ ባንክ አካውንት ያስፈልጋል</p>
            </div>
            <div className={Styles.workflow}>
                <img src={workflow}/>
            </div>
        </div>
    )
}
 
export default Workflow;