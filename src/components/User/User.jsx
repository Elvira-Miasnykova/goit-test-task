import useLocalStorage from "hooks";
import { Avatar, UserInfo, Button, Circle, Followers, Image, Line, Logo, Tweets, UserContainer } from "./User.styled";

const User = () => {
    const [isFollowing, setIsFollowing] = useLocalStorage('following', false);
    const [followers, setFollowers] = useLocalStorage('followers', 100500);

  const followingCheck = () => {
      setIsFollowing(!isFollowing);
        if (isFollowing) {
            setFollowers(followers - 1);
        }
        else {
            setFollowers(followers + 1);
        }
    };

    const changedFollowers = () => {
    const string = followers.toString();
    const length = followers.toString().length;
    return string.slice(0, length - 3) + ',' + string.slice(length - 3, length);
    };
    
    return (
        <UserContainer>
      <Logo alt="logo"/>
      <Image />
      <UserInfo>
        <Line />
        <Circle>
          <Avatar alt="avatar"/>
        </Circle>
        <Line />
      </UserInfo>
        <Tweets>{777} tweets</Tweets>
      <Followers>{changedFollowers()} Followers</Followers>
      <Button
        isFolllow={isFollowing}
        onClick={() => {followingCheck();}}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </Button>
    </UserContainer>
  );
};

export default User;
    
