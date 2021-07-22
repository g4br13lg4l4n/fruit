import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 34,
    marginTop: 60,
    paddingHorizontal: 30
  },
  loginContent: {
    marginVertical: 12,
    width: '100%'
  },
  textInput: {
    color: '#A8A7A7',
    height: 40,
    fontSize: 14,
    marginVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EAEAF5',
  },
  lostPasswordLink: {
  },
  redButton: {
    borderRadius: 50,
    backgroundColor: '#FF0036',
    color: 'white',
    height: 46,
    width: '100%'
  },
  redButtonText: {
    textAlign: 'center',
    paddingVertical: 12,
    color: 'white',
  },
  loginSocialMedia: {
    marginTop: 38,
    marginBottom: 40,
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    height: 400,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    width: 250
  },
  textLostPassword: {
    color: '#A8A7A7',
    textAlign: 'right'
  },

  containerInicioMenu: {
    marginTop: 12,
    height: 36,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    borderColor: '#EAEAF5',
    borderWidth: 2
  },
  logInBtn: {
    backgroundColor: '#FF0036',
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  logInBtnText: {
    color: 'white'
  },
  singUpBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 20,
  },
  singUpBtnText: {
    color: '#FF0036'
  }
});

export default styles;
