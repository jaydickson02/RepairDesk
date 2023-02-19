export default {
	ProcessData: async () => {
		
		//Check Data
		//Add checking code here
		
		//write code here
		UploadData.files[0].data.map((data) => {
			//Insert the device
			BulkInsertQuery.run(data)
				.then(() => {showAlert("Data for Device ID " + data.UserID + " Added Successfully")})
				.catch((err) => {showAlert("Data failed to add: " + err.message)})
		})
		
		
	}
}