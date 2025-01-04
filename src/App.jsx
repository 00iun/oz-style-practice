// import "./App.scss";
import { contents } from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";
import styled from "styled-components";
import { flexMixin } from "./components/styled"
import "./App.css"

// 1. `npm install styled-components` 를 터미널에 입력하여 설치합니다.
// 2. `npm install & npm run dev` 를 터미널에 입력하여 서버를 실행합니다.
// 3. `import styled from "styled-components"` 를 파일에 불러온 후 사용할 수 있습니다.
// 4. `App.scss` 에 작성된 코드를 각 `className`에 해당하는 요소로 이동하여 Styled-Components를 사용하여 새롭게 작성해 주세요.
//     1. `App.jsx`
//     2. `components/Content.jsx`
//     3. `components/Header.jsx`
// 5. css는 자유롭게 수정해도 좋습니다.

function App() {
  const StyledSection = styled.section`
  section {
    ${flexMixin({ justify: 'center', align: 'center', wrap: 'wrap', gap: '20px' })};
    padding: 20px 40px;
  }
`

  return (
    <main>
      <Header />
      <StyledSection>
        {contents.map((el) => (
          <Content key={el.id} content={el} />
        ))}
      </StyledSection>
    </main>
  );
}

export default App;
