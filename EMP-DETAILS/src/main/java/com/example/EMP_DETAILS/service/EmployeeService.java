package com.example.EMP_DETAILS.service;

import com.example.EMP_DETAILS.model.Employee;
import com.example.EMP_DETAILS.repository.EmployeeRepository;
import com.example.EMP_DETAILS.service.MailService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;
    private final MailService mailService;
    //save Employee and getting email
    public Employee saveEmployee(Employee employee) {
        Employee saved = employeeRepository.save(employee);
        mailService.sendMail(
                employee.getEmail(),
                "Registration Successful",
                "Hello " + employee.getEname() + ", your registration is successful!"
        );
        return saved;
    }
    // Get all employees
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

   //filter using from and to date
    public List<Employee> getEmployeesBetweenDates(LocalDate startDate, LocalDate endDate) {
        return employeeRepository.findByEjoiningDateBetween(startDate, endDate);
    }
}
