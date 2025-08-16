package com.example.EMP_DETAILS.dto;

import jakarta.validation.constraints.*;
import java.math.BigDecimal;

public class EmployeeRequest {
    @NotBlank
    private String ename;
    @NotBlank
    private String edept;
    @Email
    @NotBlank
    private String email;
    @NotNull
    private BigDecimal esalary;
    @NotBlank
    private String ejoiningDate; // yyyy-MM-dd


}

