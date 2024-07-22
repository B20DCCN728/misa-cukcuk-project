// Store the data from the API
var data = null;
// Store the employee ID selected for deletion
var employeeIdSelected = null;

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
    let url = `https://cukcuk.manhnv.net/api/v1/Employees/${employeeIdSelected}`;
    console.log('Delete employee:', url);
    axios.delete(`https://cukcuk.manhnv.net/api/v1/Employees/${employeeIdSelected}`)
    .then(response => {
        console.log('Response:', response);
        axios.get('https://cukcuk.manhnv.net/api/v1/Employees') // Fetch data again after deleting
        .then((response) => {
            data = response.data;
            setDataToTable(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            $('#data-container').append('<tr><td colspan="9">Error fetching data. Please try again later.</td></tr>');
        });
        alert('Employee deleted successfully!'); // Show success message
    })
    .catch(error => {
        console.error('There was an error deleting the employee!', error);
    })
    .finally(() => {
        $('.modal').css('display', 'none');
    });
});

// Set data to table from API
const setDataToTable = (data) => {
    var container = $('#data-container');
    container.empty(); // Clear any existing rows

    // Loop through the data and add a row for each employee
    data.forEach((item, index) =>  {
        let gender = '';
        switch(item.Gender) {
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

        let dateOfBirth = formatDate(item.DateOfBirth);
        var row = `
                    <tr class="app__content-table-row">
                        <td class="app__content-table-cell">${index + 1}</td>
                        <td class="app__content-table-cell">${item.EmployeeCode}</td>
                        <td class="app__content-table-cell">${item.FullName}</td>
                        <td class="app__content-table-cell">${gender}</td>
                        <td class="app__content-table-cell">${dateOfBirth}</td>
                        <td class="app__content-table-cell">${item.Email}</td>
                        <td class="app__content-table-cell">${item.Address}</td>
                        <td class="app__content-table-cell">
                            <div class="app__content-table-cell-action">
                                <img class="app__content-table-cell-action-img" src="/resources/assets/icon/edit.png" alt="Edit" >
                                <img class="app__content-table-cell-action-img delete" onclick="modalConfirm('${item.EmployeeId}')" src="/resources/assets/icon/delete-48.png" alt="Delete">
                            </div>
                        </td>
                    </tr>`;
        container.append(row);
    });
    $('.app__content-total').text('Tổng: ' + data.length); // Update total number of employees
};

// Get all data from API and render to table
$(() => {
    axios.get('https://cukcuk.manhnv.net/api/v1/Employees')
        .then((response) => {
            data = response.data;
            setDataToTable(data);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            $('#data-container').append('<tr><td colspan="9">Error fetching data. Please try again later.</td></tr>');
        });
});

// Search employee by key
$(() => {
    $('#search-button').click(() => {
        var keyword = $('#search-input').val();
        searchEmployees(keyword);
    });
});

// Search employee by key
function searchEmployees(keyword) {
    axios.get(`https://cukcuk.manhnv.net/api/v1/Employees/filter?employeeFilter=${keyword}`, {
        params: {
            search: keyword
        }
    })
    .then((response) => {
        data = response.data;
        setDataToTable(data);
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
        $('#data-container').append('<tr><td colspan="8">Error fetching data. Please try again later.</td></tr>');
    });
};

// Add new employee
// $(() => {
//     $('#add-button').click(() => {
//         addEmployee();
//     });
// });

// const addEmployee = () => {

// }

// function addEmployee() {
//     var newEmployee = {
//         createdDate: new Date().toISOString(),
//         createdBy: "admin",
//         modifiedDate: new Date().toISOString(),
//         modifiedBy: "admin",
//         employeeId: "3fa85f64-5717-4562-b3fc-2c963f66afa6", // Ideally, this should be generated by the server
//         employeeCode: "NV1234",
//         firstName: "Nguyen",
//         lastName: "Van A",
//         fullName: "Nguyen Van A",
//         gender: 0,
//         dateOfBirth: new Date().toISOString(),
//         phoneNumber: "0901234567",
//         email: "nguyenvana@example.com",
//         address: "123 Main Street",
//         identityNumber: "123456789",
//         identityDate: new Date().toISOString(),
//         identityPlace: "Hanoi",
//         joinDate: new Date().toISOString(),
//         martialStatus: 0,
//         educationalBackground: 0,
//         qualificationId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         departmentId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         positionId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         nationalityId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
//         workStatus: 0,
//         personalTaxCode: "123456789",
//         salary: 5000000,
//         positionCode: "DEV",
//         positionName: "Developer",
//         departmentCode: "IT",
//         departmentName: "Information Technology",
//         qualificationName: "Bachelor",
//         nationalityName: "Vietnamese"
//     };

//     axios.post('https://cukcuk.manhnv.net/api/v1/Employees', newEmployee)
//         .then((response) => {
//             console.log('Employee added successfully:', response.data);
//             alert('Employee added successfully!');
//         })
//         .catch((error) => {
//             console.error('Error adding employee:', error);
//             alert('Error adding employee. Please try again.');
//         });
// };

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
}