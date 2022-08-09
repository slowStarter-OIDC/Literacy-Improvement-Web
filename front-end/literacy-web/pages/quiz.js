import QuizItems from "../components/organism/page-quiz/QuizItems";
import Seo from "../components/seo/Seo";

export default function Quiz() {

  return (
    <div>
      <Seo title="단어 퀴즈" subtitle="우리말 뜻풀이"></Seo>
      <QuizItems></QuizItems>
    </div>
  )

}
