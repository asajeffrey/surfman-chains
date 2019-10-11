(function() {var implementors = {};
implementors["core_foundation_sys"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a>&gt; for <a class=\"enum\" href=\"core_foundation_sys/base/enum.CFComparisonResult.html\" title=\"enum core_foundation_sys::base::CFComparisonResult\">CFComparisonResult</a>",synthetic:false,types:["core_foundation_sys::base::CFComparisonResult"]},];
implementors["euclid"] = [{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 2]</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Point2D.html\" title=\"struct euclid::Point2D\">Point2D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::point::Point2D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Point2D.html\" title=\"struct euclid::Point2D\">Point2D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::point::Point2D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Point3D.html\" title=\"struct euclid::Point3D\">Point3D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::point::Point3D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, T, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Point3D.html\" title=\"struct euclid::Point3D\">Point3D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::point::Point3D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 2]</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Size2D.html\" title=\"struct euclid::Size2D\">Size2D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::size::Size2D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Size2D.html\" title=\"struct euclid::Size2D\">Size2D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::size::Size2D"]},{text:"impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"euclid/struct.Vector2D.html\" title=\"struct euclid::Vector2D\">Vector2D</a>&lt;T, Src&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.Translation2D.html\" title=\"struct euclid::Translation2D\">Translation2D</a>&lt;T, Src, Dst&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>",synthetic:false,types:["euclid::translation::Translation2D"]},{text:"impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"euclid/struct.Transform2D.html\" title=\"struct euclid::Transform2D\">Transform2D</a>&lt;T, Src, Dst&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.Translation2D.html\" title=\"struct euclid::Translation2D\">Translation2D</a>&lt;T, Src, Dst&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"euclid/trait.Trig.html\" title=\"trait euclid::Trig\">Trig</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"euclid/num/trait.One.html\" title=\"trait euclid::num::One\">One</a> + <a class=\"trait\" href=\"euclid/num/trait.Zero.html\" title=\"trait euclid::num::Zero\">Zero</a>,&nbsp;</span>",synthetic:false,types:["euclid::translation::Translation2D"]},{text:"impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"euclid/struct.Vector3D.html\" title=\"struct euclid::Vector3D\">Vector3D</a>&lt;T, Src&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.Translation3D.html\" title=\"struct euclid::Translation3D\">Translation3D</a>&lt;T, Src, Dst&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>",synthetic:false,types:["euclid::translation::Translation3D"]},{text:"impl&lt;T, Src, Dst&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"euclid/struct.Transform3D.html\" title=\"struct euclid::Transform3D\">Transform3D</a>&lt;T, Src, Dst&gt;&gt; for <a class=\"struct\" href=\"euclid/struct.Translation3D.html\" title=\"struct euclid::Translation3D\">Translation3D</a>&lt;T, Src, Dst&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Add.html\" title=\"trait core::ops::arith::Add\">Add</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Mul.html\" title=\"trait core::ops::arith::Mul\">Mul</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Div.html\" title=\"trait core::ops::arith::Div\">Div</a>&lt;T, Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/arith/trait.Neg.html\" title=\"trait core::ops::arith::Neg\">Neg</a>&lt;Output = T&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html\" title=\"trait core::cmp::PartialOrd\">PartialOrd</a> + <a class=\"trait\" href=\"euclid/trait.Trig.html\" title=\"trait euclid::Trig\">Trig</a> + <a class=\"trait\" href=\"euclid/num/trait.One.html\" title=\"trait euclid::num::One\">One</a> + <a class=\"trait\" href=\"euclid/num/trait.Zero.html\" title=\"trait euclid::num::Zero\">Zero</a>,&nbsp;</span>",synthetic:false,types:["euclid::translation::Translation3D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 2]</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Vector2D.html\" title=\"struct euclid::Vector2D\">Vector2D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::vector::Vector2D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Vector2D.html\" title=\"struct euclid::Vector2D\">Vector2D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::vector::Vector2D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a>T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 3]</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Vector3D.html\" title=\"struct euclid::Vector3D\">Vector3D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::vector::Vector3D"]},{text:"impl&lt;T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a>T, T, T<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"euclid/struct.Vector3D.html\" title=\"struct euclid::Vector3D\">Vector3D</a>&lt;T, U&gt;",synthetic:false,types:["euclid::vector::Vector3D"]},];
implementors["time_point"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/time/struct.Duration.html\" title=\"struct core::time::Duration\">Duration</a>&gt; for <a class=\"struct\" href=\"time_point/struct.Duration.html\" title=\"struct time_point::Duration\">Duration</a>",synthetic:false,types:["time_point::Duration"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/time/struct.Instant.html\" title=\"struct std::time::Instant\">Instant</a>&gt; for <a class=\"struct\" href=\"time_point/struct.TimePoint.html\" title=\"struct time_point::TimePoint\">TimePoint</a>",synthetic:false,types:["time_point::TimePoint"]},];
implementors["winit"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.LogicalPosition.html\" title=\"struct winit::dpi::LogicalPosition\">LogicalPosition</a>",synthetic:false,types:["winit::dpi::LogicalPosition"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.LogicalPosition.html\" title=\"struct winit::dpi::LogicalPosition\">LogicalPosition</a>",synthetic:false,types:["winit::dpi::LogicalPosition"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.PhysicalPosition.html\" title=\"struct winit::dpi::PhysicalPosition\">PhysicalPosition</a>",synthetic:false,types:["winit::dpi::PhysicalPosition"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.PhysicalPosition.html\" title=\"struct winit::dpi::PhysicalPosition\">PhysicalPosition</a>",synthetic:false,types:["winit::dpi::PhysicalPosition"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.LogicalSize.html\" title=\"struct winit::dpi::LogicalSize\">LogicalSize</a>",synthetic:false,types:["winit::dpi::LogicalSize"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.LogicalSize.html\" title=\"struct winit::dpi::LogicalSize\">LogicalSize</a>",synthetic:false,types:["winit::dpi::LogicalSize"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.f64.html\">f64</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.PhysicalSize.html\" title=\"struct winit::dpi::PhysicalSize\">PhysicalSize</a>",synthetic:false,types:["winit::dpi::PhysicalSize"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">)</a>&gt; for <a class=\"struct\" href=\"winit/dpi/struct.PhysicalSize.html\" title=\"struct winit::dpi::PhysicalSize\">PhysicalSize</a>",synthetic:false,types:["winit::dpi::PhysicalSize"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
