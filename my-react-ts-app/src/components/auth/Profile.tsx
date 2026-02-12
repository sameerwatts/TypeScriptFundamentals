export type ProfilePropsType = {
    name: string
}
const Profile = ({name}: ProfilePropsType) => {
    return (
        <div>
            Private profile component - Name is {name}
        </div>
    );
};

export default Profile;