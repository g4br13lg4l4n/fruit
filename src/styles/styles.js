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
    marginTop: 80
  },
  loginContent: {
    width: '75%',
    marginVertical: 30,
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
    alignItems: 'flex-end',
    flex: 1
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
    color: 'white'
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
    color: '#A8A7A7'
  },
  slideContainer: {
    height: 100,
    backgroundColor: 'red',
    flex: 1
  }
});

export default styles;
