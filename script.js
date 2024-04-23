function getTokenHolders() {
    const apiUrl = 'https://rpc.ankr.com/multichain/79258ce7f7ee046decc3b5292a24eb4bf7c910d7e39b691384c7ce0cfb839a01/?ankr_getTokenHolders=';
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'ankr_getTokenHolders',
        params: {
          blockchain: 'polygon',
          contractAddress: '0x7C58D971A5dAbd46BC85e81fDAE87b511431452E'
        },
        id: 1
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      displayTokenHolders(data.result.holders);
    })
    .catch(error => {
      console.error('Error fetching token holders data:', error);
    });
  }
  
  function displayTokenHolders(holders) {
    const tokenHoldersList = document.getElementById('tokenHoldersList');
    holders.forEach(holder => {
      const listItem = document.createElement('li');
      listItem.textContent = `Address: ${holder.holderAddress}, Balance: ${holder.balance}`;
      tokenHoldersList.appendChild(listItem);
    });
  }
  
  getTokenHolders();
  