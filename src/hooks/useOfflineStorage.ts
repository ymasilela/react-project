interface IUseOfflineStorage {
  saveData: (key: string, data: any) => void;
  loadData: (key: string) => any;
}

export const useOfflineStorage: () => IUseOfflineStorage = () => {

  return {
	  <div className="App">
         <h1>Name of the user:</h1>
         <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
         />
         <h1>Project of the user:</h1>
         <input
            type="Project"
            placeholder="Project"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
         />
         <div>
            <button onClick={handle}>Done</button>
         </div>
         {localStorage.getItem('Name') && (
            <div>
               Name: <p>{localStorage.getItem('Name')}</p>
            </div>
         )}
         {localStorage.getItem('Project') && (
            <div>
               Project: <p>{localStorage.getItem('Projecct')}</p>
            </div>
         )}
         <div>
            <button onClick={remove}>Remove</button>
         </div>
      </div> 
  }
}

