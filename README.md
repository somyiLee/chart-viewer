# 시게열 차트

- 다량의 데이터를 시각화하기 위해 chart.js를 사용했습니다.
- Multitype Chart를 이용하여 여러 키워드의 데이터를 한개의 차트에 표시합니다.
- 마우스 이벤트에 따라 tooltip 표시 및 필터링된 데이터를 하이라이트 처리합니다.

<br/><br/>

## 🛠 사용한 기술스택

<img src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=Recoil&logoColor=white"/> <img src="https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/axios-5A29E4?style=flat-square&logo=axios&logoColor=white"/> <img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=Styled components&logoColor=white"/> <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=Vite&logoColor=white"/>

<br/><br/>

## 🤔 why use chart.js?

- 문서화가 잘되어 있어 러닝커브가 낮습니다.
- SVG로 렌더링 되는 대부분의 D3.js 기반 차트 라이브러리와 달리 HTML5 캔버스에서 차트 요소를 렌더링하기 때문에 DOM에 부담 적습니다.
- 모든 웹 브라우저에 호환되며 반응형 디자인을 지원하여 사용자의 조건에 구애받지 않고 일관성있는 표현을 제공합니다.

<br/><br/>

## 🎬 페이지 미리보기 & 구현영상

배포링크 : https://chart-viewer.vercel.app/

<br/><br/>

## 🏢 설계 및 구현 설명

### 1. 시계열 차트 UI 구현
#### [설계 목표]
복잡한 데이터를 사용자가 보기 쉽게 시각화 하는 것이 주요 목표였습니다.<br/>
이를 위해 Chart.js 라이브러리를 사용하였으며, 주어진 mock data를 Chart.js에서 요구하는 데이터의 형태로 변환하는 것이 주 task입니다.

#### [구현 방법]
**`src/utils/chartHelper.ts`**
  - getAriaData, getBarData : multi type chart의 구현을 위해 area_value, bar_value를 담는 각각의 data을 만들고 차트의 타입과 스타일을 커스텀한 dataset 객체를 return 하는 함수입니다.
  - getChartData : getAriaData, getBarData 에서 return 받은 각각의 dataset 객체를 배열에 담아 리턴합니다. 이는 Chart 컴포넌트의 data prop으로 전달합니다.
    
**`src/hooks/useFetch.tsx`**
  - recoil에 관리하는 ChartState atom에 getChartData에서 return 받은 데이터를 저장합니다.
  - try-catch문을 사용하여 error와 loading 상태를 관리하여 return 합니다.

<br/>

### 2. tooltip
#### [설계 목표]
마우스 이벤트를 감지하여 bar chart 또는 area chart에 커서가 올라가 있을 때 해당 부분의 상세 데이터를 tooltip으로 보여줍니다.

#### [구현 방법]
**`src/utils/chartHelper.ts`**
  - chartOption : chart의 option을 정의한 객체를 return 합니다.
    반응형, 마우스 이벤트 여부 등의 속성을 추가 하였습니다.
  
**`src/components/ChartTable.tsx`**
  - chartOption에서 return 받은 객체를 option prop에 전달합니다.

<br/>

### 3. 데이터 필터링 & 하이라이트
#### [설계 목표]
마우스 클릭 및 버튼 클릭 시 해당 영역의 id 값과 동일한 id를 가진 영역을 하이라이트 합니다.<br/>
useSearchParams를 이용하여 쿼리스트링을 추가하여 필터링을 하며, useRef를 이용하여 현재 클릭 된 영역의 정보를 받아옵니다.

#### [구현 방법]
**`src/hooks/useChartFilter.ts`**
  - highlightSelectedId : ChartState의 id 값과 인자로 받은 id 값을 비교합니다. id 같은 영역의 스타일 속성이 변경된 객체를 ChartState에 새로 저장합니다.
  - changePrams : react-chartjs-2에서 지원하는 getElementAtEvent를 이용하여 해당 엘리먼트의 정보를 불러오고, dataset에서 id 값을 뽑아 searchParams를 변경하고, highlightSelectedId 함수를 실행합니다.

**`src/components/FilterBtn.tsx`**
  - changeParams : id 값을 인자로 받아 searchParams의 값을 변경하고, highlightSelectedId를 실행합니다.
  - 버튼의 onClick 이벤트에 changeParams 함수를 실행시킵니다.
