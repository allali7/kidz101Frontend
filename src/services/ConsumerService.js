import axios from 'axios';

const CONSUMER_API_BASE_URL = "http://localhost:8080/api/v1/consumers";

class ConsumerService{
	//create a method to get products 
	getAllConsumers(){
		return axios.get(CONSUMER_API_BASE_URL);
	}

	createConsumer(consumer){
		return axios.post(CONSUMER_API_BASE_URL, consumer);
	}

	getConsumerById(consumerId){
        return axios.get(CONSUMER_API_BASE_URL + '/' + consumerId);
    }

    updateConsumer(consumer, consumerId){
        return axios.put(CONSUMER_API_BASE_URL + '/' + consumerId, consumer);
    }

    deleteConsumer(consumerId){
        return axios.delete(CONSUMER_API_BASE_URL + '/' + consumerId);
    }
    getConsumertById(cId){
    	return axios.get(CONSUMER_API_BASE_URL + '/searchcId?cId=' + cId);
    }
    validateConsumersId(cId, password){
    	return axios.get(CONSUMER_API_BASE_URL + '/validate?cId=' + cId + '&password=' + password);
    }
    
}
export default new ConsumerService()