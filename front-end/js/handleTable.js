$(function() {
    axios.get('https://cukcuk.manhnv.net/api/v1/Employees')
        .then(function(response) {
            var data = response.data;
            var container = $('#data-container');
            container.empty(); // Clear any existing rows

            data.forEach(function(item, index) {
                var row = `
                    <tr class="app__content-table-row">
                        <td class="app__content-table-cell">${index + 1}</td>
                        <td class="app__content-table-cell">${item.EmployeeCode}</td>
                        <td class="app__content-table-cell">${item.FullName}</td>
                        <td class="app__content-table-cell">${item.Gender}</td>
                        <td class="app__content-table-cell">${item.Gender}</td>
                        <td class="app__content-table-cell">${item.Email}</td>
                        <td class="app__content-table-cell">${item.Address}</td>
                        <td class="app__content-table-cell">
                            <div class="app__content-table-cell-action">
                                <img class="app__content-table-cell-action-img" src="/resources/assets/icon/edit.png" alt="Edit">
                                <img class="app__content-table-cell-action-img" src="/resources/assets/icon/delete-48.png" alt="Delete">
                            </div>
                        </td>
                    </tr>`;
                container.append(row);
            });
        })
        .catch(function(error) {
            console.error('Error fetching data:', error);
            $('#data-container').append('<tr><td colspan="9">Error fetching data. Please try again later.</td></tr>');
        });
});
