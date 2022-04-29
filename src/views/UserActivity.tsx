
const UserActivityView = () => {

 return (
    <div className="SearchInput__Container">
      <input className={'SearchInput'} type="text" placeholder={' Type github user name'} value={searchText} onChange={(event: React.ChangeEvent<HTMLInputElement>) => onSearchInputChange(event.target.value as string)}/>
    </div>
  );

export default UserActivityView;
