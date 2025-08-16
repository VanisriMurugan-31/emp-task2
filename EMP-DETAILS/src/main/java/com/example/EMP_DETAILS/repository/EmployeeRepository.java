package com.example.EMP_DETAILS.repository;

import com.example.EMP_DETAILS.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import java.time.LocalDate;
import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    List<Employee> findByEjoiningDateBetween(LocalDate start, LocalDate end);
}
