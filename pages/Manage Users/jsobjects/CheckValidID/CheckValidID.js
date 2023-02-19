export default {
	myVar1: [],
	myVar2: {},
	CheckID: () => {
		
		//Get the ID to be added
		let ID = Username.text;
		
		//Get a list of all the current User IDs
		for(let i = 0; i < UserTable.tableData.length; i++){
			if(UserTable.tableData[i].UserID == ID){
				return false
			}
		}
		return true
	}
}