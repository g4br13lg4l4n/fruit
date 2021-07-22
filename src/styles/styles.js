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
    marginTop: 80,
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
    width: '75%',
    backgroundColor: 'red',
    width: 250,
    height: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});

export default styles;
