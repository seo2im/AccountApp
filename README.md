---
tags : Account Dev App
---

# Account App

ver 1.0

## Environment

> <span style="color : black">**important modules version**</span>

**node** : 12.18.3
**npm** : 6.14.6

**react** : 16.13.1
**react-native** : 0.63.3
**react-navigation/native** : 5.8.6

**babel/core** : 7.12.3
**styled-components** : 5.2.1

> Android version

**SDK** : Android 10.0(Q)
**Build-tools** : 29.0.2

초기 설정 참고자료 [**React native 공식 사이트**](https://reactnative.dev/docs/environment-setup)


## Src Directory Structure
```c
srcs
  ├── Component
  │   └── // 내부 표현 요소 및 공통 컴포넌트
  ├── Context
  │   └── // 데이터 hook 및 contextAPI 관리 
  ├── Editor
  │   └── // 데이터 조작 View
  ├── Screen
  │   └── // 데이터를 보여주는 View
  ├── function
  │   └── // 내부적으로 사용되는 util functions
  ├── Styles
  │   └── // style sheet
  └── App.js
```

## React native

React component를 사용해서 android, ios native 앱을 만들 수 있게끔 하는 빌드 패키지

## Start development

React native 설정

1. **최초 설치**
```shell
npm install react-native-cli

react-native init DevAccount
```

2. **최초 빌드 확인(android)**
```
npm run android
```

> <span style="color : black">Emulator problem</span>

 - Emulator 삭제 후 재설치
     1. './android/avd/~ 의 *.lock파일 삭제
     2. sdk의 build-tool 삭제
     3. 재설치

> <span style="color : black">Build 후 Metro Server 문제</span>

 - Gradle 및 빌드환경 직접 설정
     1. ./android/app/src/main/assets 폴더 생성
     2. 아래 명령어 실행

```shell
 cd android && ./gradlew clean && cd .. && react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && react-native run-android
```

*Metro server error* 관련 참고 자료 - [**dlevelb tistory**](https://dlevelb.tistory.com/1142)

## Set Basic Structure
![link text](https:// "title")
TODO : setting image update

*App.js*
```javascript
import Navigator from "./Screens/Navigator"
import Header from './Component/Header'
import { ContextProvider } from "./Context/Context"

const App =  () => {
  return (
    <>
      <Header /> //Header View
      <ContextProvider > //Context API provider module
        <Navigator />    //App View
      </ContextProvider>
    </>
  );
};
```

## Make ContextAPI(Data set)

#### contextAPI
![context api image]
데이터를 하나의 Set에서 관리하여 컴포넌트들에서 사용할 수 있게끔 하는 방식
관련 참고 자료 - [**작성자 git**](https://github.com/seo2im/StateControl)</br></br>아래와 같이 Context AP


```javascript=
/* Provider를 제공할 Context를 생성 */  
const Context = createContext({})

function ContextProvider ({ children }) {  
    /* ~~~ 각각의 Hook을 Load 
	example) const [ account, modAccount ] = useAccount(); 
    */
    ~~~
    
	return (
        /* Provider에서 제공할 hook의 기능들을 정의 */
		<Context.Provider value={{
			account, modAccount,
			~~~
		}}>
			{children}
		</Context.Provider>
	)
}

export { Context, ContextProvider };
```

#### Custom Hook
State data를 hook으로 제작, Provider로 제공
관련 참고 자료 - [**작성자 git**](https://github.com/seo2im/CustomReactHook)

*구성 데이터*
```
Account : 저금
Income : 수입
Fixed Expense : 고정 지출
Must Expense : 필수 지출
Surplus : 여유 금액
````

*Custuom Hook 예시*
```javascript=
/* Account 데이터에 대한 hook */
function useAccount () {
	const [ account, setAccount ] = useState(0);

    // 최초 앱을 렌더링할 때 핸드폰의 저장소로부터 데이터를 로드 
	const loadAccount = async () => {
		await storage.getData('account', setAccount);
	}

	useEffect(() => {
		loadAccount()
	}, []);
    
    // account 데이터 변경을 위한 hook
	const modAccount = (value) => {
		setAccount(value);
		storage.setData("account", value); //데이터를 핸드폰 저장소에 저장
	}
	
	return [ account, modAccount ];
}
```

## Navigator 구성

#### react native navigation

**주의점** : navigation v4 아래로는 deprecated된 모듈이 많으므로 v5이후 를 사용할 것

Web rotue 기능과 비슷한 기능 화면을 여러 방식으로 쌓아두거나 연결해두고 navigation을 통해 이동을 구현
관련 참고 자료 - [**React navigation 공식 doc](https://reactnavigation.org/docs/getting-started)


#### navigator 구성

Navigator에 쌓을 화면을 일괄적으로 쌓음. 해당 이동은 각각 컴포넌트 내부에서 구현

```javascript
/* Navigator.js */
function Navigator () {
	return (
		<NavigationContainer>
			<Stack.Navigator headerMode="none">
            /* 내부에 쌓을 화면(Compnent)를 이름으로 설정 */
				<Stack.Screen name="Main" component={MainView} />
				<Stack.Screen name="Surplus" component={Surplus} />
				~~~
			</Stack.Navigator>
		</NavigationContainer>
	)
}

/* Navigation 이동 example */
function Expample ({navigation}) {
    return (
        /* navigate()를 통해 실행, 첫번째가 Stack name, 두번째가 넘겨줄 파라미터이다. */
        <TouchableOpacity
            onPress={() => navigation.navigate("Surplus", {param : param})}>
            <Text>Example</Text>
        </TouchableOpacity>
    )
}
```

## 개발에 있어서 중요했던 부분 / 헷갈렸던 부분

#### Modal
특정 조건에 의거하여 화면에 뜨는 Component. 
관련 참고 자료 - [**React native 공식**](https://reactnative.dev/docs/modal)</br></br>*각각 요소중 중요했던 요소*
1. `onRequestClose` : Back button을 클릭할때 호출되는 동작
2. `transparent` : 뒷 배경을 없애는 요소

#### style : Font
폰트를 적용하기 위해 설치된 폰트를 `./android/app/src/main/assets/fonts` 디렉토리에 추가. 파일이름과 동일해야 load가능

#### style : vs Css
css설정 그대로 이름으로 적용이 안되는 경우가 많으므로 해당 경우를 [해당 사이트](https://csstox.surge.sh/)에서 확인할 것

#### style : 그림자 효과
android에는 shadow box가 설정되어 있지 않으므로 `elevation`을 통한 한정 구현만 가능. 반드시 `background-color`와 함께 사용

#### style : flex 
기본적인 View 구현의 기초이고 `display :flex`가 아닌 `flex :1`만으로도 설정이 가능하나, View가 분명히 다르므로 구별해서 사용해야 함</br>`flex-direction`과 `justify-content`옵션으로 가로 표현을 구현할 수 있음

