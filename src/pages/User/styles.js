import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Header = styled.View`
  align-items: center;
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`;

export const Name = styled.Text`
  font-size: 14px;
  font-weight: bold;
  align-items: center;
  margin-top: 5px;
`;

export const Bio = styled.Text`
  font-size: 12px;
  color: #666;
  line-height: 18px;
  margin-top: 5px;
  text-align: center;
`;

export const Loading = styled.ActivityIndicator.attrs({
  color: '#7159c1',
  size: 50,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Stars = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
  padding: 10px;
`;
export const Starred = styled(RectButton)`
  align-items: center;
  background: #eee;
  margin-bottom: 10px;
  flex-direction: row;
  padding: 10px 15px;
  border-radius: 4px;
`;
export const AvatarOwner = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 32px;
  background: #eee;
`;
export const Info = styled.View`
  margin-left: 10px;
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`;

export const Author = styled.Text`
  font-size: 15px;
  color: #666;
  margin-top: 2px;
`;

export const ContainerList = styled.View`
  flex: 1;
`;
