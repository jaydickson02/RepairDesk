export default {
	ProcessData: async () => {
		
		//Check Data
		//Add checking code here
		
		//write code here
		UploadData.files[0].data.map((data) => {
			//Insert the device
			BulkInsertQuery.run(data)
				.then(() => {showAlert("Data for Device ID " + data.Barcode + " Added Successfully")})
				.catch((err) => {showAlert("Data failed to add: " + err.message)})
			
			//Insert the assignment
			if(data.Assignment == "" || data.Assignment == null){
				data.Assignment = "Unassigned"
			}
			
			BulkAssignQuery.run(data)
				.then(() => {showAlert("Assignment for Device ID " + data.Barcode + " Added Successfully")})
				.catch((err) => {showAlert("Assignment failed to add: " + err.message)})
		})
		
		
	}
}