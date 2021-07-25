import { StyleSheet, Dimensions, StatusBar } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
const barHeight = StatusBar.currentHeight;

const red = '#FF0036';
const white = 'white';
const gray = '#A8A7A7';
const gray2 = '#EAEAF5';
const black = 'black';
const background = '#F7F6FF';
const green = '#6FCF97';
const marginHorizontal = 12;

const styles = StyleSheet.create({
  container: {
    height: windowHeight + barHeight,
    backgroundColor: background,
  },
  containerSafeArea: {
    paddingTop: barHeight,
    height: windowHeight,
    backgroundColor: background,
  },
  loginWrapper: {
    width: '90%',
    backgroundColor: white,
    borderRadius: 34,
    marginTop: 60,
    paddingHorizontal: 30
  },
  loginContent: {
    marginVertical: 12,
    width: '100%'
  },
  containerScreen: {
    marginTop: 8,
    marginHorizontal: marginHorizontal
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  textInput: {
    color: black,
    height: 40,
    fontSize: 14,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: gray2,
  },
  redButton: {
    borderRadius: 50,
    backgroundColor: red,
    color: white,
    height: 46,
    width: '100%'
  },
  redButtonText: {
    textAlign: 'center',
    paddingVertical: 12,
    color: white,
  },
  loginSocialMedia: {
    marginTop: 38,
    marginBottom: 40,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  image: {
    paddingTop: 60,
    flex: 1,
    resizeMode: "cover",
    height: 400,
    alignItems: 'center',
  },
  title: {
    color: white,
    fontSize: 40,
    width: 250
  },
  textLostPassword: {
    color: gray,
    textAlign: 'right'
  },
  containerInicioMenu: {
    marginTop: 6,
    height: 42,
    marginBottom: -14,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderColor: gray2,
    borderWidth: 2
  },
  inicioActiveBtn: {
    backgroundColor: red,
    width: '50%',
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 20,
    borderRadius: 20,
  },
  inicioActiveBtnText: {
    color: white
  },
  inicioDesableBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    height: 38,
    width: '50%',
    borderRadius: 20,
  },
  inicioDesableBtnText: {
    color: red
  },
  scrollView: {},
  barUpContainer: {
    marginHorizontal: marginHorizontal,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabNavigationContainer: {
    borderTopWidth: 2,
    borderTopColor: gray2,
    width: windowWidth,
    height: 70,
    position: 'absolute',
    bottom: -barHeight,
    paddingHorizontal: 12,
    backgroundColor: white,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tabNavigatorTouchable: {
    alignItems: 'center',
    flex: .333
  },
  circleBasketContainer: {
    height: 30,
    width: 60,
    backgroundColor: background,
    borderColor: gray2,
    position: 'relative',
    top: -21,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderWidth: 2,
    borderTopColor: background
  },
  basketButtom: {
    backgroundColor: green,
    borderRadius: 50,
    height: 52,
    width: 52,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 2,
    bottom: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,
    elevation: 5
  },
  tabNavigatorActiveText: {
    color: red,
    fontSize: 12
  },
  tabNavigatorDesableText: {
    color: green,
    fontSize: 12
  },
  /**
   * Home
   */
  titleHome: {
    fontSize: 24,
  },
  titleHomeStrong: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputSearch: {
    backgroundColor: white,
    borderWidth: 2,
    borderColor: gray2,
    borderRadius: 50,
    height: 44,
    paddingLeft: 12,
    color: black
  },
  categoryTextTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  categoriesContainer: {
    marginTop: 18,
    marginBottom: 20,
    marginHorizontal: marginHorizontal,
  },
  listCategoryContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 12
  },
  cardCategory: {
    backgroundColor: white,
    borderRadius: 25,
    width: '31%',
    alignItems: 'center',
    paddingBottom: 10,
    shadowColor: gray,
    shadowOffset: {
      width: 0,
      height: 9,
    },
    elevation: 15
  },
  cardCategoryActive: {
    borderColor: red,
    borderWidth: 1,
    shadowColor: red,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    elevation: 16,
  },
  cardCategoryImage: {
    width: 70, 
    height: 70,
  },
  cardCategoryText: {
    color: gray,
    marginTop: -18,
    fontSize: 12
  },
  cardCategoryActiveText: {
    color: red,
    fontWeight: 'bold',
    marginTop: -18,
    fontSize: 12
  }
});

export default styles;
