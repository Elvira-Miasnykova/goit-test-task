import useLocalStorage from "hooks";
import { Avatar, Box, Button, Circle, Followers, Image, Line, Logo, Tweets, UserContainer } from "./User.styled";

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

    const newString =
      string.slice(0, length - 3) + ',' + string.slice(length - 3, length);

    return newString;
    };
    
    return (
        <UserContainer>
      <Logo />
      <Image />
      <Box>
        <Line />
        <Circle>
          <Avatar />
        </Circle>
        <Line />
      </Box>
      <Tweets>777 tweets</Tweets>
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
    
