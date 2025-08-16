package com.example.EMP_DETAILS.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import java.math.BigDecimal;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.time.LocalDate;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank
    private String ename;

    @NotNull
    @DecimalMin(value = "0.0", inclusive = true)
    private BigDecimal esalary;

    @NotBlank
    private String edept;
    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")   // 👈 tells Jackson how to parse JSON
    private LocalDate ejoiningDate;

    @Email
    @NotBlank
    private String email;


}
