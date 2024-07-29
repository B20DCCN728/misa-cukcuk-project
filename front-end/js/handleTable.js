// Store the data from the API
var data = null;
// Store the employee ID selected for deletion
var employeeIdSelected = null;
let counter = 0;

// Define filter options
let filterOptions = {
    currentPage: 1,
    itemsPerPage: 10,
    searchText: ''
};


// Format date to dd/mm/yyyy
const formatDate = (dateString) => {
    let date = new Date(dateString);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    return `${day}/${month}/${year}`;
};

// Open modal confirm delete employee
const modalConfirm = (employeeId) => {
    employeeIdSelected = employeeId;
    console.log('Employee ID:', employeeIdSelected);
    $('.modal').css('display', 'flex');
    $('#modal__body').css('display', 'none');
    $('.modal__body:last-child').css('display', '');
};

// Delete employee by ID
$('.btn-confirm').on('click', () => {
    console.log('Deleting employee with ID:', employeeIdSelected);
    axios.delete(`https://localhost:7221/api/Employees/${employeeIdSelected}`)
    .then(response => {
        console.log('Response:', response);
        fetchEmployees(); // Refresh data
        alert('Employee deleted successfully!'); // Show success message
    })
    .catch(error => {
        console.error('There was an error deleting the employee!', error);
    })
    .finally(() => {
        $('.modal').css('display', 'none');
    });
});

// Fetch counter of employees
function fetchCounter() {
    if(filterOptions.searchText.length > 0) {
        counter = data.length;
        $('.app__content-total').text(`Tổng: ${counter}`);
    } else {
        axios.get('https://localhost:7221/api/Employees/counter')
        .then((response) => {
            counter = response.data;
            $('.app__content-total').text(`Tổng: ${counter}`);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            $('#data-container').append('<tr><td colspan="9">Error fetching data. Please try again later.</td></tr>');
        });
    }
};

function fetchEmployees() {
    params = {};
    if (filterOptions.searchText.length > 0) {
        params.searchText = filterOptions.searchText;
    } 
    params.pageNumber = filterOptions.currentPage;
    params.pageSize = filterOptions.itemsPerPage;
    console.log(params);
    axios.get('https://localhost:7221/api/Employees/filter', { params })
        .then((response) => {
            data = response.data;
            renderTable();
            fetchCounter()
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            $('#data-container').append('<tr><td colspan="9">Error fetching data. Please try again later.</td></tr>');
        });
}

// Set data to table from API
const renderTable = () => {
    var container = $('#data-container');
    container.empty(); // Clear any existing rows

    // Loop through the data and add a row for each employee
    data.forEach((item, index) =>  {
        let gender = '';
        switch(item.gender) {
            case 0:
                gender = 'Nữ';
                break;
            case 1:
                gender = 'Nam';
                break;
            case 2:
                gender = 'Khác';
                break;
            default:
                gender = 'Không xác định';
        }

        let dateOfBirth = formatDate(item.dateOfBirth);
        var row = `
                    <tr class="app__content-table-row">
                        <td class="app__content-table-cell">${index + 1}</td>
                        <td class="app__content-table-cell">${item.employeeCode}</td>
                        <td class="app__content-table-cell">${item.fullName}</td>
                        <td class="app__content-table-cell">${gender}</td>
                        <td class="app__content-table-cell">${dateOfBirth}</td>
                        <td class="app__content-table-cell">${item.email}</td>
                        <td class="app__content-table-cell">${item.address}</td>
                        <td class="app__content-table-cell">
                            <div class="app__content-table-cell-action">
                                <img class="app__content-table-cell-action-img" src="/resources/assets/icon/edit.png" alt="Edit" >
                                <img class="app__content-table-cell-action-img delete" onclick="modalConfirm('${item.employeeId}')" src="/resources/assets/icon/delete-48.png" alt="Delete">
                            </div>
                        </td>
                    </tr>`;
        container.append(row);
    });
};

// First loading data
$(() => {
    fetchEmployees();
});

// Search employee by key
$(() => {
    $('#search-button').click(() => {
        filterOptions.searchText = $('#search-input').val();
        fetchEmployees();
    });
});

// Export data to Excel
$('.export-excel-btn').click(function() {
    exportTableToExcel('tblData', 'exported_data');
});

function exportTableToExcel(tableID, filename = '') {
    let tableSelect = $('#' + tableID)[0];
    let wb = XLSX.utils.table_to_book(tableSelect, { sheet: "Sheet1" });
    let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });

    function s2ab(s) {
        let buf = new ArrayBuffer(s.length);
        let view = new Uint8Array(buf);
        for (let i = 0; i < s.length; i++) {
            view[i] = s.charCodeAt(i) & 0xFF;
        }
        return buf;
    }

    let blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
    let url = URL.createObjectURL(blob);
    let a = $('<a></a>').attr('href', url).attr('download', filename ? filename + '.xlsx' : 'excel_data.xlsx');
    $('body').append(a);
    a[0].click();
    a.remove();
};

// Refresh data
$('.refresh-button').click(() => {
    filterOptions.searchText = '';
    $('#search-input').val('');
    filterOptions.currentPage = 1;
    filterOptions.itemsPerPage = 10;
    fetchEmployees();
});