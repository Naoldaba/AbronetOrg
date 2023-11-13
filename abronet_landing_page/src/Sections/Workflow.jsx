
import workflow from "../resources/workflow.png";
const Workflow= () => {
    return (
        <div className="flex flex-wrap justify-center align-center my-28 md:flex-nowrap">
            <div className="md:w-1/2 px-5 mb-10">
                <h1 className="text-2xl md:text-5xl font-bold mb-5">የአሰራር ሂደት</h1>
                <p className="mt-5 ">አብሮነት በዘመናዊ በይነ-መረብ በመጠቀም ሰዎች ባሉበት ሆነው በመመዝገብና የአገልግሎቱን ተሳታፊ በመሆን በጋራ ወደተሻለ የኢኮኖሚ ዕድገት የሚዙበት ታላቅ መንገድ ነው፡፡   </p>
                <p className="mt-5 ">እያንዳንዱ ሰው ለመጀመር 3000( ሦስት ሺ ) ብር ለተረኛው መጣል ይኖረበታል፡፡</p>
                <p className="mt-5 ">ማንነቱን የሚገልጽ መታወቂያ፤ መንጃ ፈቃድ ወይም ፓስፖርት ኮፒ ከፋይሉ ጋር ማያያዝ ይኖረበታል፡፡</p>
                <p className="mt-5 ">ኢሜይል አድራሻ፤ ባንክ አካውንት ያስፈልጋል</p>
            </div>
            <div className="flex justify-center">
                <img src={workflow} className="w-3/4"/>
            </div>
        </div>
    )
}
 
export default Workflow;